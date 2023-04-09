const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const fs = require('fs');

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
    questionsPrompt();
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
    questionsPrompt();
})
}

managerData();