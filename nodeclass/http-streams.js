var http = require('http')
var fs = require('fs')


http 
.createServer(function (req, res) {
    const text = fs.readFileSync('./content/big.txt','utf8')
    res.end(text)
})  
.listen(2005)

console.log('im donee')
