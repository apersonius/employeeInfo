
// packages needed
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const inquirer = require('inquirer');

let answersArr = [];

// initial questions
const manager = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the managers name?',
    },
    {
        type: 'number',
        name: 'id',
        messgae: 'What is the employee ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their email address?',
    },
    {
        type: 'number',
        name: 'officeNumber',
        message: 'What is their office number?',
    },
    {
        type: 'list',
        name: 'role',
        message: 'Choose a role for additional employee if needed',
        choices: ['Engineer', 'Intern', 'I am all done'],
    },
];

// add engineer questions

const engineer = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the engineers name?',
    },
    {
        type: 'number',
        name: 'id',
        message: 'What is the engineers employee ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the engieers email address?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the engineers GitHub username?',
    },
    {
        type: 'list',
        name: 'role',
        message: 'Choose a role for additional employee if needed',
        choices: ['Engineer', 'Intern', 'I am all done'],
    },
];

//intern questions

const intern = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the interns name?',
    },
    {
        type: 'number',
        name: 'id',
        message: 'What is the interns employee ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the interns email address?',
    },
    {
        type: 'input',
        name: 'school',
        message: 'What school does the intern attend?',
    },
    {
        type: 'list',
        name: 'role',
        message: 'Choose a role for additional employee if needed',
        choices: ['Engineer', 'Intern', 'I am all done'],
    },
]
function init() {

    //prompt questions
    inquirer.prompt(manager).then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        answersArr.push(manager);
        if (answers.next === 'Engineer') {
            addEngineer();
        } else if (answers.next === 'Intern') {
            addIntern();
        } else {
            generateTeam();
        }
    });

    function addEngineer() {
        inquirer.prompt(engineer).then(answers => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            answersArr.push(engineer);
            if (answers.next === 'Engineer') {
                addEngineer();
            } else if (answers.next === 'Intern') {
                addIntern();
            } else {
                generateTeam();
            }
        })
    };

    function addIntern() {
        inquirer.prompt(intern).then(answers => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            answersArr.push(engineer);
            if (answers.next === 'Engineer') {
                addEngineer();
            } else if (answers.next === 'Intern') {
                addIntern();
            } else {
                generateTeam();
            }
        })
    }
};

init();