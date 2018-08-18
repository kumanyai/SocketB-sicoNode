const {io} = require('../server');

io.on('connection', (client) => { //NOTIFICA CUANDO UN CLIENTE SE CONECTA AL BACKEND
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'admin',
        mensaje: 'bienvenido a esta aplicacion'
    });

    client.on('disconnect', () => {
        console.log('Usuario Desconectado'); //CUANDO EL CLIENTE DE DESCONECTA DE LA APLICACION
    });

    //ESCUCHAR EL CLIENTE
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        //HAREMOS QUE TODOS LOS CLIENTES PUEDAN ESCUCHAR EL MENSAJE

        client.broadcast.emit('enviarMensaje', data);

        // if (mensaje.usuario){
        //     callback({
        //         resp: 'salio bien'
        //     })
        // }else {
        //     callback({
        //         resp: 'SALIO MAL!!!'
        //     })
        // }

    });

});