import Server from "./classes/server";
import router from "./routes/router";
import bodyParser from 'body-parser';
import cors from 'cors';


const server = Server.instance;

server.app.use( bodyParser.urlencoded({extended: true}) );
server.app.use( bodyParser.json() );

server.app.use('/', router);

server.start(() => {
    console.log( `El servidor esta inicializado ${server.port}` )
})