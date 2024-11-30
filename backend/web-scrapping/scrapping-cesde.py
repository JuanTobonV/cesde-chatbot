import requests
from bs4 import BeautifulSoup
#programas, direcciones, 


pageIndex = requests.get('https://www.cesde.edu.co/'); 
soupIndex = BeautifulSoup(pageIndex.text, 'html.parser');
div_sedes = soupIndex.find('div', class_='elementor-element-69d5de1'); 
direcciones = div_sedes.find_all('h3', class_='elementor-heading-title elementor-size-default'); 

for direccion in direcciones: 
    print(direccion.text.strip());






pageProgramas = requests.get('https://www.cesde.edu.co/programas/');
soupProgramas = BeautifulSoup(pageProgramas.text, 'html.parser');
section_programas = soupProgramas.find('section', class_='programa-list');
programas = section_programas.find_all('h2', class_='programa-title');


for programa in programas: 
    print(programa.text);














