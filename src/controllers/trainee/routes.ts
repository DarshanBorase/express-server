import { Router } from 'express';
import trainee  from './Controller';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
import authMiddleware from '../../libs/routes/authMiddleware';
import { TRAINEES } from '../../libs/constant';

const router = Router();



router.get('/', authMiddleware(TRAINEES, 'read'), validationHandler(validation.get), trainee.get);
router.post('/', authMiddleware(TRAINEES, 'write'), validationHandler(validation.create), trainee.post);
router.put('/', authMiddleware(TRAINEES, 'write'), validationHandler(validation.update), trainee.put);
router.delete('/', authMiddleware(TRAINEES, 'delete'), validationHandler(validation.delete), trainee.delete);
router.post('/generateToken', trainee.generateToken);

export default router;