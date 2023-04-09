const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const fs = require('fs');
const generateHelperCode = require('./src/generateHelperCode');
const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, 'dist');
const outputPath = path.join(OUTPUT_DIR, 'output.html');
const team = [];

const managerData = () => {
    return inquirer.createPromptModule([{
        type: 'input',
        name: 'name',
        message: 'What is the managers name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is their employee ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their email address?',
    },
    {
        type: 'input',
        name: 'office',
        message: 'What is their office number?',
    },
])
.then(answers => {
    console.log(answers);
    const manager = new Manager(answers.name, answers.id, answers.office);
    team.push(manager);
    questionPrompt();
})
}

const engineerData = () => {
    return inquirer.createPromptModule([{
        type: 'input',
        name: 'name',
        message: 'What is the engineers name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is their employee ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their email address?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is their github username?',
    },
])
.then(answers => {
    console.log(answers);
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    team.push(engineer);
    questionPrompt();
})
}

const internData = () => {
    return inquirer.createPromptModule([{
        type: 'input',
        name: 'name',
        message: 'What is the interns name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is their employee ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their email address?',
    },
    {
        type: 'input',
        name: 'school',
        message: 'What school does the intern attend?',
    },
])
.then(answers => {
    console.log(answer);
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    team.push(intern);
    questionPrompt();
})
}

const questionPrompt = () => {
    return inquirer.createPromptModule([{
        type: 'list',
        name: 'menu',
        message: 'Would you like to add an employee or finish and build chart?',
        choices: ['add an engineer', 'add an intern', 'finsih and build'],
    }])
    .then(userChoice => {
        switch (userChoice.menu) {
            case 'add an engineer':
                engineerData();
                break;
            case 'add an intern':
                internData();
                break;
            default:
                buildChart();
        }
    })
}

const buildChart = () => {
    console.log('Org chart has been created');
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, generateHelperCode(team));
}

managerData();