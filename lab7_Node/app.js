let log = console.log;


/*log("Hola Mundo Papu pro");


fs es el modulo que contiene las funciones para manipular el sistema de 
archivos, como leer, escribir, eliminar, etc.
const fs = require("fs");

Crear un archivo con clase writeFileSync
fs.writeFileSync("archivo.txt", "Hola Mundo Papu pro");

Async Sort Ordena los datos dentro de un arreglo, usando el valor
de cada elemento para determinar su posición en el arreglo ordenado.
*/

const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

for (let item of arreglo) {
    setTimeout(() => {
        log(item);
    }, item);
}
log ("Hola");

setTimeout(() => {
    log("Mundo");
}, 2000);

log("Adios"); 


const http = require("http");

const server = http.createServer((request, response) => {
    log(request.url);
    response.setHeader("content-type", "text/html");
    response.write('<!DOCTYPE html><html><head><meta charset="UTF-8"><title>HTML</title></head><body><h1>Hola Mundo</h1></body></html>');
    response.end();
});

server.listen(4212, () => {
    log('Server is listening on port 4212');
});

