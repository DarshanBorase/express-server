import { Router } from 'express';
import User  from './Controller';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
import authMiddleware from '../../libs/routes/authMiddleware';
import { USER } from '../../libs/constant';

const router = Router();



router.get('/', authMiddleware(USER, 'read'), validationHandler(validation.get), User.get);
router.post('/', authMiddleware(USER, 'write'), validationHandler(validation.create), User.post);
router.put('/:id', authMiddleware(USER, 'write'), validationHandler(validation.update), User.put);
router.delete('/:id', validationHandler(validation.delete), User.delete);
router.post('/createToken', User.createToken);


export default router;