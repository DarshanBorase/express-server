export default (res, req, next) => {
    next({ error: 'Not found', status: 404 });
};