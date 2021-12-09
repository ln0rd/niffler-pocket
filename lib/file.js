import os from 'os'

import pocket from './pocket.js'
import { mkdir, existsSync, writeFileSync } from 'fs'

const filename = 'pocket.json'
const path = `${os.homedir()}/.niffler`
const fileUri = `${path}/${filename}`

function createFolder() {
    mkdir(path, { recursive: true }, (err) => {});
}

function createFile() {
    if (!existsSync(fileUri)) {
        writeFileSync(fileUri, JSON.stringify(pocket))
    }
}

function getFile() {
    
    return file
}

export { createFile, createFolder, getFile }