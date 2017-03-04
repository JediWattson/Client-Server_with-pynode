import socket
import json

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
CONN = ('127.0.0.1', 1337)
s.connect(CONN)

while True:

	data = s.recv(64)
	i = raw_input(data)

	if str(i) == "e":
		#s.shutdown(SHUT_RDWR)
		s.close()
		break
	else:
		s.send(json.dumps({"choice" : i}))
