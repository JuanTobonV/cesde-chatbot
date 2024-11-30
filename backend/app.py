import json
from http.server import BaseHTTPRequestHandler, HTTPServer

# Clase para manejar las solicitudes HTTP
class RequestHandler(BaseHTTPRequestHandler):
    
    # Método GET para manejar la solicitud del frontend
    def do_GET(self):
        # Si la URL es /get-direcciones, procesamos la consulta
        if self.path == '/get-direcciones':
            # Conectamos a la base de datos
            conexion = conn()
            cursor = conexion.cursor(dictionary=True)  # Para obtener resultados como diccionarios

            # Consulta para obtener todas las direcciones
            consulta = 'SELECT * FROM direcciones'
            cursor.execute(consulta)

            # Obtener todos los resultados
            resultados = cursor.fetchall()

            # Cerrar la conexión a la base de datos
            cursor.close()
            conexion.close()

            # Convertir los resultados a JSON
            data = json.dumps(resultados)

            # Responder con los datos en formato JSON
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(data.encode('utf-8'))  # Enviar la respuesta al frontend

        else:
            # Si la ruta no es /get-direcciones, devolvemos un error 404
            self.send_response(404)
            self.end_headers()
            self.wfile.write(b'Not Found') 

# Función para iniciar el servidor HTTP
def run(server_class=HTTPServer, handler_class=RequestHandler, port=8000):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f'Servidor corriendo en http://localhost:{port}')
    httpd.serve_forever()

# Iniciar el servidor
if __name__ == '__main__':
    run(port=8000)