from cnx import conn
from insertData import insert

conexion = conn()

if(conexion):
    # Creamos un cursor para realizar consultas a MySQL
    consulta = conexion.cursor()
    
    # verificamos si la tabla está vacía o no
    countQuery = 'SELECT COUNT(*) FROM direcciones'
    consulta.execute(countQuery)
    resultado = consulta.fetchone()
    rowQuantity = resultado[0]

    if rowQuantity > 0:
        print('Ya hay datos cargados')
    else:
        insert()
    
