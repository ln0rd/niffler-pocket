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
        message: 'Enter twofac secret token that you want save',
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

export { initialQuestion, registerTwoFacQuestion }