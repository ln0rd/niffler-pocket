import { generate } from 'generate-password'

const generatePassword = () => {
    return generate({
        length: 16,
        numbers: true,
        symbols: '#@$%&_!+-'
    })
}

export { generatePassword }