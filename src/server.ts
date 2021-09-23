import * as express from 'express';
import * as bodyParser from 'body-parser';
import routes  from './libs/routes';
import router from './routes';
import Database from './libs/Database';
import Swagger from './libs/Swagger';
export default class Server {
    app: express.Express;
    constructor(private config) {
        this.app = express();
    }

    setupRoutes() {
      this.app.get('/health-check', (request: express.Request, response: express.Response) => {
        response.send("'I am OK");
      });

      this.app.use('/api', router);

      this.app.use(routes.notFoundRoute);

      this.app.use(routes.errorHandler);
    }


    initBodyParser() {
      this.app.use(bodyParser.urlencoded({ extended: false }));
      this.app.use(bodyParser.json());
    }

    initSwagger() {
      const {swaggerDefinition, swaggerUrl} = this.config;

      const swaggerSetup = new Swagger();
      this.app.use(
        `${swaggerUrl}.json`,
        swaggerSetup.getRouter({
          swaggerDefinition,
        })
      );
      const { serve, setup} = swaggerSetup.getUI(swaggerUrl);
      this.app.use(swaggerUrl, serve, setup);
    }


    bootstrap() {
        this.initBodyParser();
        this.initSwagger();
        this.setupRoutes();
        return this;
    }


     async run() {
      try {
          const {port, env, mongoUrl} = this.config;
          await Database.open(mongoUrl);
          this.app.listen(port, (err) => {
              if (err)console.log('Error in server setup');
              console.log(`app running on ${port} of ${env} successfully`);
          });
      } catch (error) {
         console.log(error);
      }
      return this;
    }
}