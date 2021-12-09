import chalk from 'chalk'

const successLog = (string) => {
    console.log(
        chalk.white.bgGreen.bold(string)
    );
}

const failLog = (string) => {
    console.log(
        chalk.white.bgRed.bold(string)
    );
}

const log = (string) => {
    console.log(
        chalk.white.blueBright.bold(string)
    );
}

export { successLog, failLog, log }