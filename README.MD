# Vidatec challenge
Proyecto realizado como challenge para Vidatec

# Descripcion
La aplicacion fue realizada con Angular 8 en la parte del front-end y Nodejs en la parte del back-end

## Dependencias
Adicionalmente del lado del back-end se utilizar las siguientes librerias

- express, para configuracion de webserver y manejo de rutas
- multpart, para el manejo de la carga de archivos ingresados por el usuario

# Instalacion
Para comenzar a usarlo va a ser necesario tener instalado `npm`, `docker` y `docker-compose`.

Ingresar en los directorios `/back` y `/front` y correr el comando `npm install` para descargar todas las dependencias que el proyecto necesita.

Luego ingresar al directorio `/docker` y correr el comando `docker-compose up`, tambien se puede correr el comando `docker-compose up -d` para correr el proceso en segundo plano y luego utilizar `docker-compose logs -f` para observar los logs.

Para terminar el proceso nuevamente en el directorio `/docker` ejecutamos el comando `docker-compose down`, de esta manera nos aseguramos de eliminar a los contenedores creados.

Nota: La primera vez que se corre puede demorar un poco mas en iniciar debido a la descarga de las imagenes que se utilizan dentro de los contenedores para cada uno de los servicios.

# TODO
## back
- parseo del csv subido por el usuario y almacenamiento de la informacion en la base de datos

## front
- utilizar informacion de la base de datos para poblar la seccion de list

