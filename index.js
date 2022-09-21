// TODO: Include packages needed for this application
const path = require("path");
const fs = require('fs');
const inquirer = require('inquirer');
const template = require('./template.js');



// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "what is the title of your project?",
        name: "title",
        validate: (value) => {if(value){return true}else{return 'I need a value to continure'}}, 
    },
    {
        type: "input",
        message: "what is your Github username?",
        name: "github",
        validate: (value) => {if(value){return true}else{return 'I need a value to continure'}}, 
    },
    {
        type: "input",
        message: "what is your email?",
        name: "email",
        validate: (value) => {if(value){return true}else{return 'I need a value to continure'}}, 
    },
    {
        type: "input",
        message: "Please give a description of your project",
        name: "description",
        validate: (value) => {if(value){return true}else{return 'I need a value to continure'}}, 
    },
    {
        type: "list",
        message: "What type of license do you have for your project?",
        name: "license",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
                ],
        validate: (value) => {if(value){return true}else{return 'I need a value to continure'}},
    },
    {
        type: "input",
        message: "What are the steps required to build your project?",
        name: "installation",
        validate: (value) => {if(value){return true}else{return 'I need a value to continure'}}, 
    },
    {
        type: "input",
        message: "Please provide instructions on how to use your project",
        name: "usage",
        validate: (value) => {if(value){return true}else{return 'I need a value to continure'}}, 
    },
    {
        type: "input",
        message: "Please include guidelines on how other users can contribute to your project",
        name: "contributing",
        validate: (value) => {if(value){return true}else{return 'I need a value to continure'}}, 
    },
    {
        type: "input",
        message: "What command should be run to test the project",
        name: "tests",
        validate: (value) => {if(value){return true}else{return 'I need a value to continure'}}, 
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    //writeFileSync create a new file in the current working directory ( process.cwd() ) 
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    //uses inquirer to get user input from the questions then take that user input (inquirerInput) is set to be put in the newly generated ReadME
    inquirer.prompt(questions).then((inquirerInput) => {
        console.log("creating your ReadME document..")
        writeToFile('README.md', template({...inquirerInput}))
    })
    
}

// Function call to initialize app
init();
