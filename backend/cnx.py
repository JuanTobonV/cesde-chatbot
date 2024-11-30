import mysql.connector

config = {
    'user': 'root',
    'password': '',
    'host': 'localhost',
    'database': 'chatbot',
}

try:
    conn = mysql.connector.connect(**config)
    print('conexion exitosa')

    if conn.is_connected():
        print("Conexión exitosa")

        # Crear un cursor para ejecutar consultas
        cursor = conn.cursor()

        # Consulta SQL para insertar datos
        sql_insert_query = """
        INSERT INTO answers (answer)
        VALUES (%s)
        """

        # Valores a insertar
        valores = ('hola')

        # Ejecutar la consulta
        cursor.execute(sql_insert_query, (valores,))

        # Confirmar los cambios
        conn.commit()
        print(f"Registro insertado, ID: {cursor.lastrowid}")

except mysql.connector.Error as err:
    print(f'error al conectar: {err}')

