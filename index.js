const inquirer = require('inquirer')
const fs = require('fs')
const util = require('util')

// Title, Description, Table of Contents, Installation, Usage, License, Contributing, Tests, Github username, Email address
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of your Project?',
            name: 'projName'
        },
        {
            type: 'input',
            message: 'What is the description of the Application?',
            name: 'projDescription'
        },
        {
            type: 'input',
            message: 'How would a user install the Application?',
            name: 'projInstall'
        },     
        {
            type: 'input',
            message: 'What is the purpose of the Application?',
            name: 'projPurpose'
        },     
        {
            type: 'input',
            message: '?',
            name: 'proj1'
        },     
        {
            type: 'input',
            message: 'How would a user install the Application?',
            name: 'proj2'
        },     
        {
            type: 'input',
            message: 'How would a user install the Application?',
            name: 'proj3'
        },     
    ]);
}

const generateReadme = (answers) =>
`# ${answers.projName}`;

const init = () => {
    promptUser()
        .then((answers) => writeFileAsync('README.md', generateReadme(answers)))
        .then(() => console.log('README.md generated successfully!'))
        .catch((err) => console.log(err));
}

init();