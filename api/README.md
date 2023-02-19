![HenryLogo](https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png)

# final Project - CompuShop

<img height="150" src="./logo.jpg" />

## Objetivos del Proyecto

- Construir una App utlizando React, Redux y Node.
- Afirmar y conectar los conceptos aprendidos en la carrera y en el proyecto individual.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.
- Usar y practicar testing.
- Agregar rutas para traer datos, filtrar, postear, eliminar y actualizar

# Versiones:

- __mongoose__: ^6.9.1
- __npm__: 8.11.0
- __node__: 16.15.1

# Rutas 

- [ ] __GET /components?name="..."__:

- Trae los componentes que coincidan con el nombre pasado por query, este no tiene problemas si el nombre esta en mayuscula o minuscula, ademas si el nombre no esta completo trae los datos que coincidan.
- si no se le pasa ningun nombre trae todos los datos.

- [ ] __GET /components/id/:id__:

- Recibe un id por params
- Aca obtenemos los detalles del componente en particular


- [ ] __GET /components/:category__:

- Recibe una categoria por params
- Trae solo los componentes que pertenezcan a esta categoria.

- [ ] __POST /components__:

- Recibe datos del body 
- Crea un componente en la base de datos

- [ ] __DELETE /components/:id__:

- Recibe un id por params
- elimina el componente que coincida con el id

- [ ] __PUT /components/:id__:

- Recibe un id por params
- Actualiza los datos del componente que tenga ese id
