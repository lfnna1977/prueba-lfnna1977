# Gestión de paquetes

## Estudiante

- Navarro Arias Luis Fernando Numa

# Resumen

Paquete que nos permite realizar una busqueda Fuzzy dentro de una colección de objetos, para determinar cuales de los objetos de la colección posee el valor que estamos buscando. En general esta tecnica es utilizada para filtrar tablas.

Se utilizo el gestor de paquetes NPM.

Disponible en:

* Paquete de [npmjs](https://www.npmjs.com/package/prueba-lfnna1977/ "prueba-lfnna1977")
* Repositorio en [github](https://github.com/lfnna1977/prueba-lfnna1977/ "prueba-lfnna1977")

## Modo de uso

Primero debemos de crearnos una carpeta, que puede ser *test*, desde la linea de comando nos ubicamos en dicha carpeta e instalamos el modulo con el comando:

``` $ npm install prueba-lfnna1977```

Si la instalacion ha sido exitosa, se instalara prueba-lfnna1977 y todas sus dependencias (en este caso Underscore).

Seguidamente se crea un archivo **app.js** desde el cual se va a utilizar el modulo:

```
var fuzzy = require('prueba-lfnna1977');

// Test
var example = [{
    name: 'Numa',
    language: [{
        name: 'JavaScript',
        expertise: 8
    }, {
        name: 'Node.js',
        expertise: 7
    }]
}, {
    name: 'Luis',
    language: [{
        name: 'HTML',
        expertise: 9
    }, {
        name: 'CSS',
        expertise: 10
    }]
}];

// Return first object of array "example"
console.log(fuzzy.search(example, /Node/));
```
y ejecutamos el archivo

``` node app.js```

## Metodo de busqueda Fuzzy

El presente proyecto se basa en la publicación [Búsqueda Fuzzy sobre un Array Object](https://medium.com/@peraferrer/search-fuzzy-into-array-object-for-javascript-5e08c2c18eb4?source=your-stories)
