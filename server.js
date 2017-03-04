var u = require("./userobj.js")
var userList = []
var numUsersOnline = 0

require("net")

.createServer((c) => {
	c.on('data', (data) => {uChoice(data)})
	c.on('end', () => {console.log("client left this biatch!!!!")})
})

.listen({
	host: "127.0.0.1",
	port: 1337	
})

.on('connection', (c) => {
	c.write("Please Enter User name")
	c.pipe(c)
	userList.push(new u(true, c, ""))
})

.on('close', () => {
	console.log("done")	
})

.on('error', (err) => {
	console.log("uh oh!")
	throw err
})

var uChoice = function(c){
	console.log(numUsersOnline)
	var ch = JSON.parse(c.toString()).choice
	if (userList[numUsersOnline].init){
		userList[numUsersOnline].init = false
		userList[numUsersOnline].name = ch
		numUsersOnline += 1
	}

}
