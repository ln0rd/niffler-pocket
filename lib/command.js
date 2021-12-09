import chalk from 'chalk'
import { runQuestions } from './runQuestions.js'
import { registerTwoFacQuestion } from './questions.js'
import { getFile } from './file.js'

const command = async (awnser) => {
    switch (awnser.initial) {
        case 'register twofac token':
            registerTwoFac()
            break
        case 'search twofac token':
            break
        case 'segister password':
            break
        case 'search password':
            break
        case 'generate random password':
            break
        default:
            console.log(
                chalk.white.bgRed.bold(`Something Wrong with this question`)
            );
    }
}

async function registerTwoFac() {
    const { masterPassword, password } = await runQuestions(registerTwoFacQuestion)
    const file = getFile()
    console.log(
        chalk.white.bgGreen.bold(`YOURS PASS ${masterPassword} ${password}`)
    );
}

export { command }