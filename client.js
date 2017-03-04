const rl = require('readline')
.createInterface({
	input: process.stdin,
	output: process.stdout,
	prompt: 'OHAI> '
})

var csock = require('net')
.connect({port: 1337},() => {
	console.log("connected to server!!!!")
})

.on('data', (data) => {
	console.log(data.toString().trim())
})

.on('end', () => {
	console.log("no mas server!")	
})

.on('error', (err) => {
	console.log(err)
	throw err		
})

