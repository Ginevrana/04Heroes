// Git bash here y escribir "code ." para abrir visual desde la carpeta
// npm i express en terminal para instalar express
// npm init para crear .json o "npm init -y" para no tener que ingresar enter 
// se ignoran para git los archivos node_modules y package-lock.json
// se agrega línea "start": "nodemon app.js" a las scripts de package.json para cada vez que pongamos "npm start" nodemon corra el archivo app.js

const server = require('express');
const app = server();
const port = 3030
const path = require('path')
//Para agregar imágenes a .html, de esta manera le indicamos al servidor que la carpeta public es una ruta estática para llegar a las imágenes
app.use(server.static('public'));
//Middleware está antes de que se ejecute la ruta. App.use es el método que queremos usar

// alt + shift + flecha abajo/arriba para copiar en la dirección indicada
app.get('/', (req,res) => {res.sendFile(path.join(__dirname, 'views', 'index.html'))});
app.get('/babbage', (req,res) => {res.sendFile(path.join(__dirname, 'views', 'babbage.html'))})
app.get('/berners-lee', (req,res) => {res.sendFile(path.join(__dirname, 'views', 'berners-lee.html'))})
app.get('/clarke', (req,res) => {res.sendFile(path.join(__dirname, 'views', 'clarke.html'))})
app.get('/hamilton', (req,res) => {res.sendFile(path.join(__dirname, 'views', 'hamilton.html'))})
app.get('/hopper', (req,res) => {res.sendFile(path.join(__dirname, 'views', 'hopper.html'))})
app.get('/lovelace', (req,res) => {res.sendFile(path.join(__dirname, 'views', 'lovelace.html'))})
app.get('/turing', (req,res) => {res.sendFile(path.join(__dirname, 'views', 'turing.html'))})

// Microdesafíos - Paso 1: Creación de servidor
app.listen(port, () => console.log('Servidor ejecutado en puerto ' + port));

// Microdesafíos - Paso 2: Crear carpetas y archivos .html 
// Microdesafíos - Paso 3: Vincular los archivos .html con app.js (línea 10 hasta línea 20)
// Microdesafíos - Paso 4: Colocar las fotos de nuestros héroes en cada archivo .html

