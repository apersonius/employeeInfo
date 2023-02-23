
// packages needed
const Manager = require('./lib/manager')
const inquirer = require('inquirer');

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

];

inquirer.prompt(manager);
