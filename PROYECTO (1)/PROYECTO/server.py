from urllib import parse
from http.server import HTTPServer, SimpleHTTPRequestHandler

port = 8000



class miServidor(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path=="/":
            self.path = "MENU.html"
        return SimpleHTTPRequestHandler.do_GET(self)

    def do_POST(self):
        lenc = int(self.headers["Content-Length"])
        data = self.rfile.read(lenc)
        data = data.decode()
        data = parse.unquote(data)


        self.send_response(200)
        self.end_headers()
        self.wfile.write( data.encode() )

print("Iniciando Servidor", port)
server = HTTPServer(("localhost", port), miServidor)
server.serve_forever()