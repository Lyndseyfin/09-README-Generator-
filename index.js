// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const api = require("./utils/api");

// const writeFileAsync = util.promisify(fs.writeFile);


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


            ]
        },

        {
            type: 'input',
            message: 'What is your repository name?',
            name: 'repository',
        },

];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if (err){
            console.error(err);
        };


async function init() {
    console.log("\n *** Welcome to the README Generator *** \n");
    try {
      const answers = await inquirer.prompt(questions);
      await api.getUserInfo(answers.userName.trim())
      .finally(() => {
        const readme = `./readme/README-${answers.repoName.trim()}.md`;
        writeToFile(readme, answers);
      });
    }
    catch (error) {
      console.log(error);
    }
  };
  
  init();

