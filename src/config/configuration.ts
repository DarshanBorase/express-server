import { config } from 'dotenv';
import { IConfig } from './Iconfig';
import { version } from  '../../package.json';
export const SWAGGER_URL = '/api-docs';

config();

export const ABOUT = {
    description: 'API with swagger',
    title: 'API Swagger Project ',
};

const configuration: IConfig = Object.freeze({
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    secret: process.env.TOKEN_SECRET,
    mongoUrl: process.env.MONGO_URL,
    password: process.env.PASSWORD,
    swaggerDefinition: {
        openapi: '3.0.0',
        servers: [{url: 'http://localhost:9000/api/'}],
        components: {
          securitySchemes: {
            bearerAuth: {
              type: 'http',
              scheme: 'bearer',
              bearerFormat: 'JWT',
            }
          }
        },
        security: [{
          bearerAuth: []
        }],
      info: {
       ...ABOUT,
          version,
        },
      },
    swaggerUrl: SWAGGER_URL,
});


export default configuration;