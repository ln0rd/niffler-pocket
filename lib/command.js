import { successLog, failLog, log } from './log.js'
import { runQuestions } from './runQuestions.js'
import { registerTwoFacQuestion, registerPasswordQuestions, initialQuestion, searchTwoFacQuestion, searchPasswordsQuestion } from './questions.js'
import { getFile, writeFile } from './file.js'
import { generatePassword } from './passwordGenerator.js'
import { encrypt, decrypt } from './cryptography.js'
import { generateToken } from './authenticator.js'
import { copyToClipboard } from './clipboard.js'

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
            await searchPasswords()
            command( await runQuestions(initialQuestion))
            break
        case 'generate random password':
            await createPassword()
            command( await runQuestions(initialQuestion))
            break
        case 'exit':
            process.exit()
        default:
            failLog('Something Wrong with this question, maybe not implemented')
            command( await runQuestions(initialQuestion))
    }
}

async function registerTwoFac() {
    const file = getFile()
    const { masterPassword, secretToken, name } = await runQuestions(registerTwoFacQuestion)
    file.pocket.secrets.push({ name: name, secretToken: encrypt(secretToken, masterPassword) })
    writeFile(file)
    successLog('Two fac token registered')
}

async function registerPassword() {
    const file = getFile()
    const { masterPassword, password, name } = await runQuestions(registerPasswordQuestions)
    file.pocket.passwords.push({ name: name, password: encrypt(password, masterPassword) })
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
    const twoFacQuestionsCreated = searchTwoFacQuestion(listOfTwofacTokensNames)
    const { searchTwofacAwnser, masterPassword } = await runQuestions(twoFacQuestionsCreated)
    const token = await recoveryTwoFacToken(file.pocket.secrets, searchTwofacAwnser)
    const decryptedToken = decrypt(token[0].secretToken, masterPassword)
    const tokenGenerated = generateToken(decryptedToken)
    copyToClipboard(tokenGenerated)
    successLog(`Token ${ tokenGenerated } was copyed to your clipboard`)
}

async function recoveryTwoFacToken(secretList, name) {
    return secretList.filter( (secret) => {
        return name === secret.name
    })
}

async function searchPasswords() {
    const file = getFile()
    const listOfPasswordsNames = file.pocket.passwords.map((password) => {
        return password.name
    })
    const passwordsQuestionsCreated = searchPasswordsQuestion(listOfPasswordsNames)
    const { searchPasswordsAwnser, masterPassword } = await runQuestions(passwordsQuestionsCreated)
    const password = await recoveryPassword(file.pocket.passwords, searchPasswordsAwnser)
    const decryptedPassword = decrypt(password[0].password, masterPassword)
    copyToClipboard(decryptedPassword)
    successLog(`Password: ${decryptedPassword} was copyed to your clipboard`)
}

async function recoveryPassword(passwordsList, name) {
    return passwordsList.filter( (password) => {
        return name === password.name
    })
}

export { command }