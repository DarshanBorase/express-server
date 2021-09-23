import * as jwt from 'jsonwebtoken';
import UserRepository from '../../repositories/user/UserRepository';
import  config  from '../../config/configuration';
import hasPermission from '../hasPermission';

const userRepository: UserRepository = new UserRepository();

export default (moduleName, permissionType) => async(req, res, next) => {
    let token = req.header('Authorization');
    console.log(token);
    if (!token) {
        next({ error : 'Unauthorized', message : 'Token not found', status : 403});
    }
    if (token.startsWith('Bearer ')) {
        token = token.substring(7, token.length);
    }
    const { secret } = config;
    // console.log(secret);

    let user;
    try {
        user = jwt.verify(token, secret);
        console.log(user);
    }
    catch (err) {
        next({ error : 'Unauthorized', message : 'User not Authorized', status : 403});
    }
    // console.log('User is', user);

    if (!user) {
        next({ error : 'Unauthorized User', message : 'User not Authorized', status : 403});
    }

    const userData = await userRepository.findOne({_id: user._id});
    console.log(userData);
    if (!userData) {
        next({ error : 'Unauthorized User Data', message : 'Permisssion Denied', status : 403});
    }

    if (!hasPermission( moduleName, userData.role, permissionType )) {
        next({ error : 'Unauthorized', message : 'Permisssion Denied', status : 403});
    }
    req.user = user;
    next();
};