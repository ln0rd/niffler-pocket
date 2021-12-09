import { successLog, failLog, log } from './log.js'
import { runQuestions } from './runQuestions.js'
import { registerTwoFacQuestion, registerPasswordQuestions, initialQuestion } from './questions.js'
import { getFile, writeFile } from './file.js'
import { generatePassword } from './passwordGenerator.js'

const command = async (awnser) => {
    switch (awnser.initial) {
        case 'register twofac token':
            await registerTwoFac()
            command( await runQuestions(initialQuestion))
            break
        case 'search twofac token':
            break
        case 'register password':
            await registerPassword()
            command( await runQuestions(initialQuestion))
            break
        case 'search password':
            break
        case 'generate random password':
            await createPassword()
            command( await runQuestions(initialQuestion))
            break
        default:
            failLog('Something Wrong with this question, maybe not implemented')
            command( await runQuestions(initialQuestion))
    }
}

async function registerTwoFac() {
    const file = getFile()
    const { masterPassword, secretToken, name } = await runQuestions(registerTwoFacQuestion)
    file.pocket.secrets.push({ name: name, secretToken: secretToken })
    writeFile(file)
    successLog('Two fac token registered')
}

async function registerPassword() {
    const file = getFile()
    const { masterPassword, password, name } = await runQuestions(registerPasswordQuestions)
    file.pocket.passwords.push({ name: name, password: password })
    writeFile(file)
    successLog('Password registered')
}

async function createPassword() {
    const pwsd = generatePassword()
    log(`Generated password: ${pwsd}`)
}

export { command }