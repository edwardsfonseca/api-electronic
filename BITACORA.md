## Bienvenidos front end techt test una api electronic ...##
Destacar que el codigo funcionara en el momento localmente por lo que tendras que clonar este repositorio
y ejecutar en tu maquina con los siguientes comandos no tendras problemas y veras el resultado de esta api


## A continuacion te indico las dependencias instaladas adicionales 

- react-router-dom
- react-redux (en esta ocasion solo experimente)
- axios (en esta ocasion solo experimente)
- prop-types

En caso de tener algun error podrias actulizar las dependencias con el siguiente comando npm update (nombre de la depencia)

## Para iniciar el proyecto sin ningun error sigue las siguientes instrucciones 

- Iniciando desde la ruta principal ejecuta el comando 
  # npm install
- Una vez hecho lo anterior dirigete al entorno del front de la siguiente manera , he ejecuta el mismo comando anterior
  # cd front
  # npm install
  # cd .. (te devuelve a la ruta principal)
- Estando en el entorno principal ejecuta el siguiente comando
  # npm run dev 
  (ejecutara tanto el puerto 5000 / 3000 al tiempo)
  en caso de no abrirte la web automaticamente ingresa a este link 
  -`http://localhost:3000/"

## El Ejercicio nos propone hacer lo siguiente 
- 1.- Una lista de ítems mostrando el catálogo de productos.
- 2.- Página de producto mostrando detalle de producto. 
- 3.- Un carrito de compras que tenga todos los ítems que serán comprados por el usuario. 
- 4.- Espacio donde se muestre la sincronización de los ítems añadidos al carrito.  

## Adicionalmente tener en cuenta ciertas reglas 

- 1.- Cada ítem del catálogo debe tener un action button con el texto Add item to cart.
- 2.- Si no hay stock el action button debe deshabilitarse
- 3.- Cada ítem en el carro debe tener un action button para remover el ítem del carro.
- 4.- Los items en el carrito se deben de agrupar mostrando cantidad de cada producto añadido.

## Tambien nos dan unas tareas adicionales 
- 1.- Mostrar el rating y número de reviews en el PLP y PDP
- 2.- Usar Redux para mantener el estado global.
- 3.- Mantener info de ítems en carrito al recargar la página

## Este texto extra es mi trayecto en el codigo ---

- Retos en el proyecto : implementar el localstorage , honestamente pense que iba ser mas facil de lo que parecia .

 Mi solucion fue crear una funcion handle llamando al parametro producto 
 y almacenarlo en el localstorage y luego en la lista de productos en el estado
 en mi caso lo aplique en 2 componentes (proyecto , app), llamado mediante el hook useState 
 y el hook useEffect para guardar el estado 

 - Reto Redux y Mostrar el rating y número de reviews en el PLP y PDP
 
 ## 