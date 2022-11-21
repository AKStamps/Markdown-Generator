const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');

inquirer.prompt(
    [
        {
            type: 'input',
            name: 'Title',
            message: 'What is the title of your project?',
            validate: (value) => { if(value){return true} else {return 'you must input a value to continue'}},
        },
        {
            type: 'input',
            name: 'Description',
            message: 'What is the description of your project?',
            validate: (value) => { if(value){return true} else {return 'you must input a value to continue'}},
        },
        {
            type: 'input',
            name: 'TBContents',
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
            name: 'test',
            message: 'Please input instructions to test your project',
            validate: (value) => { if(value){return true} else {return 'you must input a value to continue'}},
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Please list any questions you would like to include',
            validate: (value) => { if(value){return true} else {return 'you must input a value to continue'}},
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please input your github username',
            validate: (value) => { if(value){return true} else {return 'you must input a value to continue'}},
        },



    
    ]
).then(( {
 Title,
 Description,
 TBContents,
 Installation,
 usage,
 license,
 contributors,
 test,
 questions,
 github,
 } ) => {


}
)