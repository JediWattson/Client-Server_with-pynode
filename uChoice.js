module.exports = function uChoice(uList, choice, sock){
	
	var ch = JSON.parse(choice.toString()).choice
	
	userobj = uList.find(x => x.conn == sock)
	
	if (userobj.init)
	{
		userobj.init = false
		userobj.name = ch
		sock.write("Welcome " + userobj.name)
		sock.pipe(sock)		
		console.log("User: " + ch + " ...has been added")
	}
	else
	{
		sock.write("\nUser Added\n") 
		sock.pipe(sock)
	}
}
