const { readFile } = require('fs')

const getText = (path) => {
    return new Promise ((resolve, rejects) => {
        readFile('./content/first.txt', 'utf8', (err, data) => {
            if (err) {
                rejects(err)
            } else {
                resolve(data)
            }
    })
    })
}

getText('./content/first.txt') 
.then(result => console.log(result))
.catch(err => console.log(err))
