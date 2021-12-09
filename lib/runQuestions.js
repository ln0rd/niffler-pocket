import inquirer from 'inquirer'

async function runQuestions(questions) {
    return inquirer.prompt(questions)
}

export { runQuestions }