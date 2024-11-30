import requests
from bs4 import BeautifulSoup
#programas, direcciones, 


page_index = requests.get('https://www.cesde.edu.co/'); 
soup_index = BeautifulSoup(page_index.text, 'html.parser');
div_sedes = soup_index.find('div', class_='elementor-element-69d5de1'); 
direcciones = div_sedes.find_all('h3', class_='elementor-heading-title elementor-size-default'); 

def direccion():
    respuestas = [];
    for direccion in direcciones: 
        respuestas.append(direccion.text.strip());
    return "Sí, nuestras direcciones son " + ", ".join(respuestas);


div_atencion = soup_index.find('div', class_='elementor-element-6668e804');
lineas_atencion = div_atencion.find_all('h3', class_='elementor-heading-title elementor-size-default');


def numeros_atencion():
    respuestas = [];
    for lineas in lineas_atencion: 
        respuestas.append(lineas.text.strip());
    return "Sí, nuestras líneas de atención son " + ", ".join(respuestas);



page_nosotros = requests.get('https://www.cesde.edu.co/nosotros/');
soup_nosotros = BeautifulSoup(page_nosotros.text, 'html.parser');
div_nosotros = soup_nosotros.find('div', class_='elementor-element-78d319a');
texto_nosotros = div_nosotros.find('div', class_='elementor-element-eb71e39');

def nosotros():
    respuestas = [];
    for nosotros in texto_nosotros:
        respuestas.append(nosotros.text.strip());
    return "Somos una empresa " + ", ".join(respuestas);



