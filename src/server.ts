import * as express from 'express';
export default class Server {
    app: express.Express;
    constructor(private config) {
        this.app = express();
    }
    /**
     * This method use to set health-check route
     */
    setupRoutes() {
      this.app.get('/health-check', (req, res) => {
          res.send("'I am OK");
      });
    }

    /**
     * This Method use to set in initial route
     * @returns
     */
    bootstrap() {
        this.setupRoutes();
        return this;
    }

    /**
     * This method use to listen port
     */
    run() {
        const {port, env} = this.config;
        this.app.listen(port, (err) => {
            if (err)console.log('Error in server setup');
            console.log(`app running on ${port} of ${env} successfully`);
        });
    }
}
