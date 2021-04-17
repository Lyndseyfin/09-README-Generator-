
// TODO: Include packages needed for this application
const fs = require('fs');
//require() defaults to the node_modules folder, so we need ./ for packages NOT in node_modules
const inquirer = require('inquirer');
const util = require('util');
const generateMarkdown = require('./generateMarkdown');

//returns a promise object to prevent callback hell
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
        message: 'What is your project description?',
        name: 'description',
    },

    {
        type: 'input',
        message: 'What installations were used?',
        name: 'Installation',
    },

    {
        type: 'input',
        message: 'Please provide usage instructions here.',
        name: 'usage',
    },

    {
        type: 'input',
        message: 'Who contributed to this project?',
        name: 'contributing',
    },

    {
        type: 'input',
        message: 'Please provide test instructions here.',
        name: 'tests',
    },
    
    {
        type: 'input',
        message: 'What is your GitHub?',
        name: 'github',
    },

    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },

    {
        type: 'list',
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
        ]

    }];

const promptUser = () => {
    return inquirer.prompt(questions);
    // create function to write README file
};

// Promises are part of async functionality in JS
// Promises are objects with then/catch methods (these are paired together)
// AFTER retrieving the data THEN do an action, if it doesn't work CATCH that error
const init = () => {
    console.log("Please answer the following questions in order to generate a README file.")
    promptUser()
    .then((answers) => {
        console.log(answers);
        return writeFileAsync('dist/README.md', generateMarkdown(answers))})
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
    

};

init();