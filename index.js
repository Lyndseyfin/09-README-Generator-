// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');


const writeFileAsync = util.promisify(fs.writeFile);


// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'title',
        },

        {
            type: 'input',
            message: 'Description of project?',
            name: 'description',
        },

        {
            type: 'input',
            message: 'What is your LinkedIn URL?',
            name: 'LinkedIn',
        },

        {
            type: 'input',
            message: 'What is your emaiil?',
            name: 'email',
        },

        {
            type: 'input',
            message: 'What is your GitHub URL?',
            name: 'GitHub',
        },

        {
            type: 'input',
            message: 'What license would you like to use?',
            name: 'license',
        },
];

   init();
