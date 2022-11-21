const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt(
    [
        {
            type: 'input',
            name: 'Project Title',
            message: 'What is the title of your project?',
            validate: (value) => { if(value){return true} else {return 'you must input a value to continue'}},
        },
        {
            type: 'input',
            name: 'Project Description',
            message: 'What is the description of your project?',
            validate: (value) => { if(value){return true} else {return 'you must input a value to continue'}},
        },
        {
            type: 'input',
            name: 'Table of Contents',
            message: 'Please input the table of contents of your project?',
            validate: (value) => { if(value){return true} else {return 'you must input a value to continue'}},
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'How would you like to install your project?',
            validate: (value) => { if(value){return true} else {return 'you must input a value to continue'}},
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How would you like to use your project?',
            validate: (value) => { if(value){return true} else {return 'you must input a value to continue'}},
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license would you like to use for your project?',
            choices: ['MIT License', 'GPL License', 'Apache License'],
            validate: (value) => { if(value){return true} else {return 'you must input a value to continue'}},
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Please list any contributors you would like to include',
            validate: (value) => { if(value){return true} else {return 'you must input a value to continue'}},
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please list any tests you would like to include',
            validate: (value) => { if(value){return true} else {return 'you must input a value to continue'}},
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Please list any questions you would like to include',
            validate: (value) => { if(value){return true} else {return 'you must input a value to continue'}},
        },


    
    ]
)