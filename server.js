var userList = []
var numUsersOnline = 0

var u = require("./userobj.js")
var uChoice = require("./uChoice")
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
	numUsersOnline++
	
	c.on('data', (data) => {uChoice(userList, data, c)})
	c.on('close', () => {c.unref()})
})

.on('close', () => {console.log("done")})
.on('error', (err) => {throw err})
