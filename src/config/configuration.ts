import { config } from 'dotenv';
import { IConfig } from './Iconfig';
import * as Joi from '@hapi/joi';
config();

// joi
const envVarsSchema = Joi.object({
    NODE_ENV: Joi.string().default('dev'),
    PORT: Joi.number().default(9000)
}).required();

const {value: envVars} = envVarsSchema.validate(process.env);
const configuration: IConfig = Object.freeze({
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    secret: envVars.TOKEN_SECRET,
    mongoUrl: envVars.MONGO_URL,
    password: envVars.PASSWORD
});

export default configuration;