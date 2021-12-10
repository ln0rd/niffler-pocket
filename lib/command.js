import { successLog, failLog, log } from './log.js'
import { runQuestions } from './runQuestions.js'
import { registerTwoFacQuestion, registerPasswordQuestions, initialQuestion, searchTwoFacQuestion } from './questions.js'
import { getFile, writeFile } from './file.js'
import { generatePassword } from './passwordGenerator.js'

const command = async (awnser) => {
    switch (awnser.initial) {
        case 'register twofac token':
            await registerTwoFac()
            command( await runQuestions(initialQuestion))
            break
        case 'search twofac token':
            await searchTwoFac()
            command( await runQuestions(initialQuestion))
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

async function searchTwoFac() {
    const file = getFile()
    const listOfTwofacTokensNames = file.pocket.secrets.map((secretToken) => {
        return secretToken.name
    })
    const searchTwoFacQuestionsCreated = searchTwoFacQuestion(listOfTwofacTokensNames)
    const { searchTwofacAwnser } = await runQuestions(searchTwoFacQuestionsCreated)
    const token = await recoveryTwoFacToken(file.pocket.secrets, searchTwofacAwnser)
    successLog(`Your token: ${token[0].secretToken}`)
}

async function recoveryTwoFacToken(secretList, name) {
    return secretList.filter( (secret) => {
        return name === secret.name
    })
}

export { command }