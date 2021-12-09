import { runQuestions } from './lib/runQuestions.js'
import { initialQuestion } from './lib/questions.js'
import { command } from './lib/command.js'
import { init } from './lib/init.js'


const run = async () => {
    init()
    const awnser = await runQuestions(initialQuestion)
    command(awnser)
}
  
run()