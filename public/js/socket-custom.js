var socket = io(); //io es una funcion que aparece al importar la libreria
socket.on('connect', function () { //Establecer la comunicacion entre el servidor y el cliente - Sabemos cuando nos conectamos al server
    console.log('Conectado al Servidor');
});

//LOS on SON PARA ESCUCHAR SUCESOS
socket.on('disconnect', function () { //CUANDO PERDEMOS CONEXION CON EL SERVIDOR
    console.log('Perdimos conexion con el servidor');
});

//LOS emit SON PARA ENVIAR INFORMACION
socket.emit('enviarMensaje', { //le enviamos un objeto que reibira cuando emitamos el mensaje 'enviarMensaje'
    usuario: 'Alex',
    mensaje: 'Hola Mundo'
}, function (respuesta) {
    console.log('Respuesta server: ', respuesta);
});

//ESCUCHAR INFORMACION
socket.on('enviarMensaje', function (mensaje) {
    console.log('Servidor ', mensaje);
});