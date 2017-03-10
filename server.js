var u = require("./server_obj/userobj.js")
var uChoice = require("./server_obj/uChoice")

const fs = require("fs")
var options = { 
	key: fs.readFileSync('/etc/letsencrypt/live/famtrees.ml/privkey.pem'), 
    cert: fs.readFileSync('/etc/letsencrypt/live/famtrees.ml/fullchain.pem'), 
}

var app = require('express')()
.set('port', 80)
.get('/', (req, res) =>{
	res.send("Welcome!!!")
	console.log("connect!")
})
//require('https').createServer(options, app).listen(app.get('port'))
