var u = require("./userobj.js")

var userList = []
var test = u.user("asdasd", "asdasd")
require("net")
.createServer((c) => {
	console.log("socket to me")	
	userList.push(new user(c, "asdasdasd"))
	c.write("welcome")
	c.pipe(c)
	c.on('data', (d) => {console.log(d.toString())})
	c.on('end', () => {console.log("client left this biatch!!!!")})
})

.listen({
	host: "127.0.0.1",
	port: 1337	
})

.on('error', (err) => {
		console.log("uh oh!")
		throw err
})


.on('close', () => {
	console.log("done")	
})
