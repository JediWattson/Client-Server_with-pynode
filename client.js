var csock = require('net')

.connect({port: 1337},() => {
	console.log("connected to server!!!!")
	csock.write("hey server! what's going on brah!")
	csock.pipe(csock)
	csock.end()
})

.on('data', (data) => {
	console.log(data.toString())
	//csock.end()
})

.on('end', () => {
	console.log("no mas!")	
})

.on('error', (err) => {
	console.log(err)
	throw err		
})