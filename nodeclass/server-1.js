const http = require('http')

const server = http.createServer((req, res) => {
    res.end('welcome to our home page')
    res.end()
})

server.listen(2006)

console.log('done');