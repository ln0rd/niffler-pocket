const initialQuestion = [
    {
        type: 'list',
        name: 'initial',
        message: 'What I can do:',
        choices: ['Register twofac token', 'Search twofac token', 'Register password', 'Search password', 'Generate random password', 'test'],
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
        }
    ]
}

export { initialQuestion, registerTwoFacQuestion, registerPasswordQuestions, searchTwoFacQuestion }