// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
// const api = require("./utils/api");


const writeFileAsync = util.promisify(fs.writeFile);


// TODO: Create an array of questions for user input
// const questions[]??
const promptUser = () => {
    return inquirer.prompt[
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'title',
        },

        {
            type: 'input',
            message: 'What is your project description?',
            name: 'description',
        },

        {
            type: 'input',
            message: 'What is your LinkedIn URL?',
            name: 'LinkedIn',
        },

        {
            type: 'input',
            message: 'What is your email?',
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
            choices: [{
                name: 'MIT License',
            },

            {
                name: 'GNU GPL v3.0',
            },

            {
                name: 'Apache License 2.0',
            },

            {
                name: 'No License',
            },

            {
                type: 'input',
                message: 'What is your repository name?',
                name: 'repository',
            },
            ]
            ,
        }]

    
// create function to write README file

const init = () => {
console.log("Please answer the following questions in order to generate a README file.")

const answers = await promptUser();


writeFileAsync
}
};

init();