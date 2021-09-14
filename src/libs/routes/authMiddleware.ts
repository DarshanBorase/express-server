import * as jwt from 'jsonwebtoken';
import UserRepository from '../../repositories/user/UserRepository';
import  config  from '../../config/configuration';
import hasPermission from '../hasPermission';

const userRepository: UserRepository = new UserRepository();

export default (moduleName, permissionType) => async(req, res, next) => {
    const token = req.header('Authorization');
    // console.log(token);
    if (!token) {
        next({ error : 'Unauthorized', message : 'Token not found', status : 403});
    }
    const { secret } = config;
    console.log(secret);

    let user;
    try {
        user = jwt.verify(token, secret);
        console.log(user);
    }
    catch (err) {
        next({ error : 'Unauthorized', message : 'User not Authorized', status : 403});
    }
    console.log('User is', user);

    if (!user) {
        next({ error : 'Unauthorized', message : 'User not Authorized', status : 403});
    }

    const userData = await userRepository.findOne({_id: user.id});

    if (!userData) {
        next({ error : 'Unauthorized', message : 'user not Authorized', status : 403});
    }

    console.log(moduleName, permissionType, user.role);
    if (!hasPermission( moduleName, user.role, permissionType )) {
        next({ error : 'Unauthorized data', message : 'Permisssion Denied', status : 403});
    }
    req.user = user;
    next();
};