import {SingleBar, Presets} from 'cli-progress'
import chalk from 'chalk'
import * as fs from 'fs'
import {Stream} from 'stream'
import * as readline from 'readline'
import {once} from 'events'
export const c = chalk
export const log = console.log
export const timeout = 5
import {createObjectCsvWriter} from 'csv-writer'

export function getRandomElementFromArray<T>(arr: T[]): T {
    return arr[Math.round(Math.random() * (arr.length - 1))]
}
export async function sleep(sec: number, reason = 'Sleep') {
    if (sec > 1) {
        sec = Math.round(sec)
    }
    let bar = new SingleBar({format: `${reason} | ${c.blueBright('{bar}')} | {percentage}% | {value}/{total} sec`}, Presets.rect)
    bar.start(sec, 0)
    for (let i = 0; i < sec; i++) {
        await new Promise((resolve) => setTimeout(resolve, 1 * 1000))
        bar.increment()
    }
    bar.stop()
    process.stdout.clearLine(0)
}
export async function defaultSleep(sec: number, needProgress = true) {
    if (needProgress) {
        let newpaste = ['-', `\\`, `|`, `/`]
        for (let i = 0; i < sec * 3; i++) {
            process.stdout.clearLine(0) // clear current text
            process.stdout.cursorTo(0)
            process.stdout.write(`${newpaste[i % 4]}`)
            await await new Promise((resolve) => setTimeout(resolve, 333))
        }
        process.stdout.clearLine(0) // clear current text
        process.stdout.cursorTo(0)
        return
    }
    return await new Promise((resolve) => setTimeout(resolve, sec * 1000))
}
export const workInProgress = {
    work: true,
    paste: [
        'Brewing coffee...',
        'Ordering pizza...',
        'Getting donuts...',
        'Calling parents...',
        'Calculating average airdrop per account...',
        'Feeding cat...',
        'Scrolling twitter...',
        'DMing Brian Pellegrino...',
        'Going for a walk...',
        'Playing games...',
        'Reading a book...',
        'Getting lambo...',
        'Getting spaceship...',
        'Listening to music...',
        'Subscribing to @findmeonchain telegram channel :)',
        'Starring ibisal repos on github... :P',
        'Learning spanish...',
        'Getting a real job...',
        'Watching netflix...',
        'Learning what happened on Tiananmen Square 1989...',
        'Mining one bitcoin...',
        'Learning about omnichain protocol architecture...',
        'Juming random wiki articles...',
        'Deutsch im Schlaf sprechen...'
    ],
    delay: 0.1,
    async run() {
        while (this.work) {
            let paste = getRandomElementFromArray(this.paste)
            for (let i = 0; i < paste.length; i++) {
                if (!this.work) {
                    break
                }
                process.stdout.write(paste[i])
                await defaultSleep(this.delay, false)
            }
            await defaultSleep(1, false)
            console.clear()
        }
    },
    stop() {
        this.work = false
    }
}
export async function importData(path = './addresses.txt') {
    let data: string[] = []
    let instream = fs.createReadStream(path)
    let rl = readline.createInterface(instream)
    rl.on('line', (line) => {
        data.push(line)
    })
    await once(rl, 'close')
    return data
}
export async function appendToFile(file: string, data: string) {
    await fs.promises.appendFile(`${file}`, data + '\n')
}
export async function writeToFile(file: string, data: string) {
    await fs.writeFile(`${file}`, data + '\n', (err) => {
        if (err) throw err
    })
}
