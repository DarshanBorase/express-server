import * as express from 'express';
import * as bodyParser from 'body-parser';
import routes from './libs/routes';
import router from './routes';
export default class Server {
    app: express.Express;
    constructor(private config) {
        this.app = express();
    }
    /**
     * This method use to set health-check route
     */
    setupRoutes() {
        this.app.get('/health-check', (req, res, next) => {
            res.send("'I am OK");
        });
            this.app.use('/api', router);
            this.app.use(routes.notFoundRoute);
            this.app.use(routes.errorHandler);
    }
    initBodyParser() {
        // parse application/x-www-form-urlencoded
        this.app.use(bodyParser.urlencoded({ extended: false }));

        // parse application/json
        this.app.use(bodyParser.json());
    }

    /**
     * This Method use to set in initial route
     * @returns
     */
    bootstrap() {
        this.initBodyParser();
        this.setupRoutes();
        return this;
    }

    /**
     * This method use to listen port
     */
    run() {
        const { port, env } = this.config;
        this.app.listen(port, (err) => {
            if (err) console.log('Error in server setup');
            console.log(`app running on ${port} of ${env} successfully`);
        });
    }
}