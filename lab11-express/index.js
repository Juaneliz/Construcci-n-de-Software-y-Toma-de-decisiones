/*const express = require('express');
const app = express();
let log = console.log;


// Middleware 
app.use((req, res, next) =>{
    log('Middleware!');
    next();//next() is used to pass control to the next middleware function in the stack
});


app.use((req, res, next) =>{
    log('Middleware2');
    next();
});

app.get('/papupro', (req, res, next) =>{
    res.setHeader('Content-Type', 'text/plain');
    res.send('Url Index /');
});


app.use((req, res, next) =>{
    log('Middleware3');
    res.status(404);
    res.send('Not Found');
});


//log("Hola,aqui estoy!!!");
//log(" Prueba de cambio con el watch");
app.listen(3000);*/

const http    = require('http');
const express = require('express');
const path    = require('path');
const fs      = require('fs');
const app     = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.get('/', (request, response) => {
    response.setHeader('Content-Type', 'text/plain');
    response.send("URL index /");
    response.end(); 
});

app.get('/test_json', (request, response, next) => {
    response.setHeader('Content-Type', 'application/json');
    response.json({code:200, msg:"Ok GET"});
    response.end();  
});

app.post('/test_json', (request, response, next) => {
    response.setHeader('Content-Type', 'application/json');
    response.json({code:200, msg:"Ok POST"});
    response.end();  
});

app.get('/test_html', (request, response, next) => {
    response.setHeader('Content-Type', 'text/html');    
    response.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8">
            <title>Código en HTML</title>
        </head>
        <body>
            <h1>hola mundo desde express</h1>
        </body>
        </html>
    `);
    response.end(); 
});

app.get('/reflexion', (request, response, next) => {
    response.setHeader('Content-Type', 'text/html');    
    response.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8">
            <title>Código en HTML</title>
        </head>
        <body>
            <h1>Pregunta</h1>
            <p> Que es un archivo package.json</p>
            <p>Un archivo package.json es el corazon del proyecto
            Mediante el se basan todas las librerias instaladas, la ejecucion
            y como se debe de desarrollar el proyecto para que funcione correctamente</p>
        </body>
        </html>
    `);
    response.end(); 
});

const rutasFormulario = require("./formulario.routes");
app.use('/formulario', rutasFormulario);

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.status(404);
    response.send('¡Page Not Found!'); //Manda la respuesta
});

const server = http.createServer( (request, response) => {    
    console.log(request.url);
});
app.listen(3000);