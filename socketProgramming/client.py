print("Starting a new server..")

HOST='localhost'
PORT= 8083
 
client_socket= socket.socket()
client_socket.connect((HOST,PORT))
client_socket.sendall(b"Hello server")
responsefromserver= client_socket.recv(2048)
print(responsefromserver)