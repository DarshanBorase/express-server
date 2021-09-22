import { Router } from 'express';
import * as swaggerJsdoc from 'swagger-jsdoc';
import * as swaggerUi from 'swagger-ui-express';


export interface ISwaggerDefinition {
    swaggerDefinition: {
        basePath: string,
        info: {
          title: string,
          version: string,
        },
    };
}


export default class Swagger {
    public getRouter({swaggerDefinition}: ISwaggerDefinition) {
        const router = Router();
        console.log('swaggerDefinition ===', swaggerDefinition );
        router.route('/')
           .get ((req, res) => {
               const options = {
                   apis: ['dist/**/*.js'],
                   swaggerDefinition
               };
               const swaggerSpec = swaggerJsdoc(options);
               console.log(swaggerSpec.paths);
               res.send(swaggerSpec);
           });
           return router;
        }
         public getUI(swaggerUrl: string) {
             const options = {
                 swaggerUrl:   `${swaggerUrl}.json`,
             };
             return {
                 serve: swaggerUi.serve,
                 setup: swaggerUi.setup(undefined, options)
             };
         }
    }
