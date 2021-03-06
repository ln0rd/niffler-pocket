import os from 'os'

import pocket from './pocket.js'
import { mkdir, existsSync, writeFileSync, readFileSync } from 'fs'

const filename = 'pocket.json'
const path = `${os.homedir()}/.niffler`
const filePath = `${path}/${filename}`

function createFolder() {
    mkdir(path, { recursive: true }, (err) => {});
}

function createFile() {
    if (!existsSync(filePath)) {
        writeFileSync(filePath, JSON.stringify(pocket), {encoding: 'utf8', flag: 'w'})
    }
}

function getFile() {
    return JSON.parse(readFileSync(filePath, 'utf8'));
}

function writeFile(file) {
    writeFileSync(filePath, JSON.stringify(file), {encoding: 'utf8', flag: 'w'})
}

export { createFile, createFolder, getFile, writeFile }