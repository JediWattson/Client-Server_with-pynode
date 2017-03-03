var i = 0

require("net")
.createServer((c) => {
	i++
	console.log("socket to me!\nUser: " + i)		
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
		console.log(err.stack)
		throw err
})


.on('close', () => {
	console.log("done")	
})