# Archivo de webscrapping donde recolecta toda la informacion

# Importaciones
from cnx import conn
from scraping import direccion
from scraping import numeros_atencion
from scraping import nosotros
from scraping import creditos

# Funcion para insert datos
def insert():
    conexion = conn()
    
    if(conexion):
        print('Conexión exitosa a la BD')
        
        # Inserta las respuestas en la base de datos
        consulta = conexion.cursor()
        
        try:
            # Obtén las respuestas desde el scraping
            direcciones = direccion()
            numerosTel = numeros_atencion()
            nosotrosFunction = nosotros()
            creditosFunction = creditos()
            
            for direccionUnica in direcciones:
                consulta.execute(
                    "INSERT INTO direcciones(direccion) VALUES (%s)", (direccionUnica,)
                )
            for numeroUnico in numerosTel:
                consulta.execute(
                    "INSERT INTO numeros_atencion(numero) VALUES (%s)", (numeroUnico,)
                )
            for nosotrosUnico in nosotrosFunction:
                consulta.execute(
                    "INSERT INTO nosotros(info) VALUES (%s)", (nosotrosUnico,)
                )
            for creditoUnico in creditosFunction:
                consulta.execute(
                    "INSERT INTO creditos(credito) VALUES (%s)", (creditoUnico,)
                )
            
            # Confirma los cambios
            conexion.commit()
        except Exception as e:
            print("Error:", e)