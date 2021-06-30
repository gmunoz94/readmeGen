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
            name: 'title'
        },
        {
            type: 'input',
            message: 'What is the description of the Application?',
            name: 'description'
        },
        {
            type: 'input',
            message: 'How would a user install the Application?',
            name: 'installation'
        },     
        {
            type: 'input',
            message: 'What is the purpose of the Application?',
            name: 'usage'
        },     
        {
            type: 'input',
            message: 'Who all contributed to the project?',
            name: 'contributors'
        },        
        {
            type: 'input',
            message: 'What is your github username??',
            name: 'username'
        },     
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email'
        }
    ]);
}

const generateReadme = (answers) =>
`
# ${answers.title}

## Description
${answers.description}

## Table of Contents
> -[Installation](#installation)
>
> -[Usage](#usage)
>
> -[Contributors](#contributors)
>
> -[Contact Me](#contact)
>
> -[Licence](#licence)

## Installation
    ${answers.installation}

## Usage
    ${answers.usage}

## Contributors
    ${answers.contributors}

## Contact
    GitHub: [${answers.username}](https://github.com/${answers.username})
    Email: [${answers.email}](mailto:${answers.email})
    `;

const init = () => {
    promptUser()
        .then((answers) => writeFileAsync('README.md', generateReadme(answers)))
        .then(() => console.log('README.md generated successfully!'))
        .catch((err) => console.log(err));
}

init();