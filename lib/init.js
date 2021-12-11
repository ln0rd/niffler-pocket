import chalk from 'chalk'
import figlet from 'figlet'

import { createFolder, createFile } from './file.js'

const init = () => {
    console.clear()
    console.log(
        chalk.magenta(
        figlet.textSync('Niffler pocket', {
            font: 'Doom',
            horizontalLayout: 'default',
            verticalLayout: 'default'
        })
    ))

    createFolder()
    createFile()
}

export { init }