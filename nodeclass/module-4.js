const { readFile } = require('fs')

const getText = (path) => {
    return new Promise ((resolve, rejects) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                rejects(err)
            } else {
                resolve(data)
            }
    })
    })
}


const start = async() => { 
    try {
        const first = await getText('./content/first.txt')
        const second = await getText('./content/second.txt')
        console.log(first,second);
    } catch (error) {
        console.log(error);
    }
     
}

start()





