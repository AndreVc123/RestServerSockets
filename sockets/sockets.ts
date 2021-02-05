import socketIO from 'socket.io';
import { Socket } from 'socket.io';


export const desconectar = (cliente: Socket) => {
    cliente.on('disconnect', () => {
        console.log('cliente desconectado')
    })
}

export const mensajes  = (cliente: Socket, io: socketIO.Server) => {
    cliente.on('mensaje', (payload: {de: string, cuerpo: string}, callback) => {
        console.log('mensaje recibido: ', payload );

        io.emit('message-new', payload);

    })
}