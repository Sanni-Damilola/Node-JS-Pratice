const { readFile, writeFile } = require('fs')

const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)




const start = async () => { 
    try {
        const first = await readFilePromise('./content/first.txt','utf8')
        const second = await readFilePromise('./content/second.txt')
        await writeFilePromise(
            './content/result-mind-grenade.txt',
             `THIS IS AWESOME : ${first} ${second}`,
             { flag: 'a'}
             )
        console.log(first,second);
    } catch (error) {
        console.log(error)
    }
     
}

start()




