import { checkSchema, validationResult } from 'express-validator';

const validationHandler = (validator) => {
    return [
        checkSchema(validator),
        (request, response, next) => {
            const error = validationResult(request);
            console.log(error);
            if (!error.isEmpty()) {
                next({
                    message: 'Bad Request',
                    status: 422,
                    error: error.array()
                });
            }
            next();
        }
    ];
};
export default validationHandler;