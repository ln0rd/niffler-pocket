import inquirer from 'inquirer'

const initialQuestion = [
    {
        type: 'list',
        name: 'initial',
        message: 'What I can do:',
        choices: [
            'Register twofac token', 
            'Search twofac token', 
            'Register password', 
            'Search password', 
            'Generate random password', 
            new inquirer.Separator(), 
            'exit'
        ],
            
        filter(val) {
            return val.toLowerCase();
        }
      }
]

const registerTwoFacQuestion = [
    {
        type: 'input',
        message: 'Enter twofac name',
        name: 'name',
    },
    {
        type: 'password',
        message: 'Enter twofac secret token that you to want save',
        name: 'secretToken',
        mask: '*',
    },
    {
        type: 'password',
        message: 'Enter your master password',
        name: 'masterPassword',
        mask: '*',
    }
]

const registerPasswordQuestions = [
    {
        type: 'input',
        message: 'Enter password name',
        name: 'name',
    },
    {
        type: 'password',
        message: 'Enter password that you to want save',
        name: 'password',
        mask: '*',
    },
    {
        type: 'password',
        message: 'Enter your master password',
        name: 'masterPassword',
        mask: '*',
    }
]

const searchTwoFacQuestion = (listOfTwofacTokensNames) => {
    return [
        {
            type: 'list',
            name: 'searchTwofacAwnser',
            message: 'Searching Two fac token',
            choices: listOfTwofacTokensNames
        },
        {
            type: 'password',
            message: 'Enter your master password',
            name: 'masterPassword',
            mask: '*',
        }
    ]
}

const searchPasswordsQuestion = (listOfPasswordsNames) => {
    return [
        {
            type: 'list',
            name: 'searchPasswordsAwnser',
            message: 'Searching Passwords',
            choices: listOfPasswordsNames
        },
        {
            type: 'password',
            message: 'Enter your master password',
            name: 'masterPassword',
            mask: '*',
        }
    ]
}

export { initialQuestion, registerTwoFacQuestion, registerPasswordQuestions, searchTwoFacQuestion, searchPasswordsQuestion }