import mysql.connector # type: ignore
from http.server import BaseHTTPRequestHandler, HTTPServer

def conn():
    try:
        conexion = mysql.connector.connect(
            host='localhost',
            user= 'root',
            password= '',
            database= 'chatbot'
        )
        return conexion
    except mysql.connector.Error as e:
        print("Error al conectar a la BD", e)
        return None