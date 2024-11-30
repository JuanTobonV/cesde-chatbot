import requests
from bs4 import BeautifulSoup # type: ignore

page_index = requests.get('https://www.cesde.edu.co/')
soup_index = BeautifulSoup(page_index.text, 'html.parser')
div_sedes = soup_index.find('div', class_='elementor-element-69d5de1')
direcciones = div_sedes.find_all('h3', class_='elementor-heading-title elementor-size-default')

def direccion():
    adress = []
    for direccion in direcciones: 
        adress.append(direccion.text.strip())
    return adress

div_atencion = soup_index.find('div', class_='elementor-element-6668e804')
lineas_atencion = div_atencion.find_all('h3', class_='elementor-heading-title elementor-size-default')

def numeros_atencion():
    numbers = []
    for lineas in lineas_atencion: 
        numbers.append(lineas.text.strip())
    return numbers

page_nosotros = requests.get('https://www.cesde.edu.co/nosotros/')
soup_nosotros = BeautifulSoup(page_nosotros.text, 'html.parser')
div_nosotros = soup_nosotros.find('div', class_='elementor-element-eb71e39')
texto_nosotros = div_nosotros.find('div', class_='elementor-widget-container')

def nosotros():
    aboutUs = []
    for nosotros in texto_nosotros:
        aboutUs.append(nosotros.text.strip())
    return aboutUs

page_creditos = requests.get('https://www.cesde.edu.co/opciones-de-pago/')
soup_creditos = BeautifulSoup(page_creditos.text, 'html.parser')
div_creditos = soup_creditos.find( 'div', class_='elementor-element-8e1238f')
texto_credito = div_creditos.find('p')

def creditos():
    credits = [] 
    for credito in texto_credito:
        credits.append(credito.text.strip())
    return credits