const errorHandler = (err, req, res, next) => {
    if (res.headersSent) {
        console.log('In here');
        return next(err);
    }
    const {message, error, status} = err;
    const errorResponse = {
        error: error || 'undefined',
        message: message || 'error',
        status: status || 500,
        timestamp : new Date()
    };
    res.status(errorResponse.status).json(errorResponse);
};
export default errorHandler;