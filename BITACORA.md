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
    Resultado : Mediante la fetch podemos obtener los productos que necesitemos y mostralos como lo requiramos en mi caso use map para obtener los valores y un key para que por cada producto se cree un card
- 2.- Página de producto mostrando detalle de producto. 
    Resultado : Mediante la fetch localhost seguido de su id podemos obtener los detalles de cada producto al que necesitemos llamar , en mi caso con el link to hice llamado a la ruta con su id unico
    y asi con un boton learn more en la card podremos ver los detalles de cada producto
- 3.- Un carrito de compras que tenga todos los ítems que serán comprados por el usuario. 
Resultado : para hacer la funcionalidad del carrito , se implemento una logitca en flux y se llama en el componente a necesitar en este caso productos.js adicionalmente agrege un localstorage para guarda el valor del carrito cuando se refresca la pagina o cuando la cierra mantiene el valor de lo agregado
- 4.- Espacio donde se muestre la sincronización de los ítems añadidos al carrito.  
  Resultado: en mi caso utilize un estado que lo guarde en app.js para ser llamado cuando se necesite por props , en el navbar con su respectiva logica , seguido de la logica de sumar los valores agregados y retornandolos en numero entero sin decimales 
## Adicionalmente tener en cuenta ciertas reglas 

- 1.- Cada ítem del catálogo debe tener un action button con el texto Add item to cart. 
  Respuesta : En mi caso agrege un boton con las condiciones que indica el ejercicio en este caso si el stock del producto es 0 no se muestra el botton
- 2.- Si no hay stock el action button debe deshabilitarse

- 3.- Cada ítem en el carro debe tener un action button para remover el ítem del carro.
  Para esto hice se llama a actions en flux que contiene una funcion que junto a botton se logra eliminar 
  cabe decir que para que sirva cada botton alado de cada producto se debe usar su key o index
- 4.- Los items en el carrito se deben de agrupar mostrando cantidad de cada producto añadido.
  Para logar esto use en mi caso un bucle dentro de un useEffect con su logica actulizando el estado del total y llamandola en su respectivo lugar
## Tambien nos dan unas tareas adicionales 
- 1.- Mostrar el rating y número de reviews en el PLP y PDP
- 2.- Usar Redux para mantener el estado global.
- 3.- Mantener info de ítems en carrito al recargar la página
para esto implementamos localstorage 
## Cabe destacar que en esta api se trabajo patrón de arquitectura flux