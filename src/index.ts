import express, { Application } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser'
import IndexRoutes from './routes/IndexRoutes';
import BooksRoutes from './routes/BooksRoutes';
const morgan = require('morgan');
const rfs = require("rotating-file-stream");

var path = require('path');

class Index {

    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('PORT', process.env.PORT || 5000);
        var accessLogStream = rfs.createStream('access.log', {
            interval: '1d', // ROTATE DAILY
            path: path.join(__dirname, 'log')
        });
        this.app.use(morgan('combined', { stream: accessLogStream })); 
        this.app.use(bodyParser.json());
        this.app.use(cookieParser());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(cors());
    }
    
    routes(): void {
        this.app.use('/', IndexRoutes);
        this.app.use('/api/books', BooksRoutes)
    }
    start(): void {
        this.app.listen(this.app.get('PORT'),()=>{
            console.log(`SERVER IS RUNNING ON :- ` + 'http://'  + process.env.HOST + ':' + process.env.PORT);
        });

        process.on('uncaughtException', (error)  => {
            console.log('Oh my god, something terrible happened: ',  error);
            process.exit(1); // EXIT APPLICATION
        });

        process.on('unhandledRejection', (error, promise) => {
            console.log(' Oh Lord! We forgot to handle a promise rejection here: ', promise);
            console.log(' The error was: ', error );
        });
    }
}

const server = new Index();
server.start();