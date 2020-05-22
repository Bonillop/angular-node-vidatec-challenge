# WORK IN PROGRESS!!!!!!!

# Vidatec challenge
Proyecto realizado como challenge para Vidatec. 

# Descripcion
La aplicacion fue realizada con Angular 8 en la parte del front-end y Nodejs en la parte del back-end

## Dependencias
Adicionalmente del lado del back-end se utilizar las siguientes librerias

- express, para configuracion de webserver y manejo de rutas
- multpart, para el manejo de la carga de archivos ingresados por el usuario
- nodemon, para tener hot reloading y mejorar la experiencia de desarrollo
- csvtojson, para conversion de archivo csv a json
- mongoose, para la definicion de modelos para interactuar con la base de datos

# Instalacion
Para comenzar a usarlo va a ser necesario tener instalado `npm`, `docker` y `docker-compose`.

Ingresar en los directorios `/back` y `/front` y correr el comando `npm install` para descargar todas las dependencias que el proyecto necesita.

Luego ingresar al directorio `/docker` y correr el comando `docker-compose up`, tambien se puede correr el comando `docker-compose up -d` para correr el proceso en segundo plano y luego utilizar `docker-compose logs -f` para observar los logs.

Para terminar el proceso nuevamente en el directorio `/docker` ejecutamos el comando `docker-compose down`, de esta manera nos aseguramos de eliminar a los contenedores creados.

Nota: La primera vez que se corre puede demorar un poco mas en iniciar debido a la descarga de las imagenes que se utilizan dentro de los contenedores para cada uno de los servicios.

Para ingresar a la aplicacion desde el browser deberá utilizar la url http://localhost:3000

En la carpeta `/front/src/assets` se puede encontrar un csv de prueba para subir

Para inspeccionar facilmente el estado de la base de datos se puede navegar a través de la url http://localhost:8081 con el docker levantado

# TODO
## back
- limite y paginacion del get de movies
- endpoint para get de movie por titulo
- edicion y eliminacion de peliculas
- agregar typescript
- tests
- error handling

## front
- agregar filtros en la lista de movies
- edicion y eliminacion de peliculas

