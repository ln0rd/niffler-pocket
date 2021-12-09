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
        type: 'password',
        message: 'Enter twofac token that you want save',
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

export { initialQuestion, registerTwoFacQuestion }