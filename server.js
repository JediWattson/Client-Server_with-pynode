var userList = []

var u = require("./server_obj/userobj.js")
var uChoice = require("./server_obj/uChoice")
require("net")

.createServer()

.listen({
	host: "127.0.0.1",
	port: 1337	
})

.on('connection', (c) => {
	c.write("enter Name: ")
	c.pipe(c)
	
	userList.push(new u(true, c, ""))
	
	c.on('data', (data) => {uChoice(userList, data, c)})
	c.on('close', () => {c.unref()})
})

.on('close', () => {console.log("done")})
.on('error', (err) => {throw err})

require('express')()

.get('/', (req, res) =>{
	res.send("Welcome!!!")
	console.log("baosidj")
})

.listen(80)

