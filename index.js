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

        }

    
    ]
)