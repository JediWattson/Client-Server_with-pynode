var u = require("./server_obj/userobj.js")
var uChoice = require("./server_obj/uChoice")
var path = require('path')
const fs = require("fs")

var options = { 
	key: fs.readFileSync('/etc/letsencrypt/live/famtrees.ml/privkey.pem'), 
    cert: fs.readFileSync('/etc/letsencrypt/live/famtrees.ml/fullchain.pem'), 
}

require("net")
.createServer()
.listen(1337)
.on('connection', (c) => {
	c.write("enter Name: ")
	c.pipe(c)
	userList.push(new u(true, c, ""))
	
	c.on('data', (data) => {uChoice(userList, data, c)})
	c.on('close', () => {c.unref()})
})

.on('close', () => {console.log("done")})
.on('error', (err) => {throw err})


var app = require('express')()
.get('/', (req, res) =>{
	res.sendFile(path.join(__dirname + '/index.html'))
	console.log(req.header('x-forwarded-for') || req.connection.remoteAddress + "connect!")
})

.listen(80)

//require('https').createServer(options, app).listen(app.get('port'))
