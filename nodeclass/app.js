const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('waasup dude')
        return
    }
    if(req.url === '/about'){
        res.end('na wetin dey be this')
        return
    }
    res.end(`
    <h1>Opps!</h1>
    <p>nothin dey</p>
    <a href='/'>back home</a>
    `)

});

server.listen(2002)

console.log("i am done");
