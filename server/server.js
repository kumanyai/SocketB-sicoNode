const express = require('express'); //CARGAMOS LIBRERIA DE EXPRESS
const socketIO = require('socket.io'); //CARGAMOS EL PAQUETE SOCKET.IO
const http = require('http');//MODULO QUE YA TRAE NODE POR DEFECTO (P-Socket.io)

const path = require('path'); //CARGAMOS LA LIBRERIA DEL PATH

const app = express(); //INICIALIZAMOS EL EXPRESS
let server = http.createServer(app); //DEFINIR EL SERVIDOR PARA CORRER LA APLICACION (P-Socket.io)

const publicPath = path.resolve(__dirname, '../public'); //CREAMOS UN publicPath QUE ES PARA COMPARTIR Y HACER PUBLICO NUESTRA CARPETA  'public'
const port = process.env.PORT || 3000; //CREAMOS EL PORT QUE NOS DICE SI ESTAMOS EN PRODUCCION O DESARROLLO

app.use(express.static(publicPath)); //USAMOS EL MIDDLEWARE PARA HABILITAR LA CARPETA PUBLIC Y QUE PUEDAN ACCEDER A ELLA

//IO = Esta es la comunicacion del Backend - lo que necsitemos hacer haremos referencia a 'io' - (P-Socket.io)
module.exports.io = socketIO(server); //INICIALIZAR EL SOCKET.IO
require('./sockets/socket'); //PARA QUE EL SERVER OCUPE EL ARCHIVO

server.listen(port, (err) => { //MONTAMOS NUESTRA APLICACION PARA QUE ESCUCHE EL PUERTO - (P-Socket.io)

    if (err) throw new Error(err);
    console.log(`Servidor corriendo en puerto ${ port }`);

});

//podemos acceder a esta direccion: http://localhost:(puerto)/socket.io/socket.io.js - si ven un archivo de JS entonces esta configurado correctamente