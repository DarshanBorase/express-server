import { Router } from 'express';
import Reviewer from './Controller';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
import authMiddleware from '../../libs/routes/authMiddleware';
import { REVIEWER } from '../../libs/constant';

const router = Router();



router.get('/', authMiddleware(REVIEWER, 'read'), validationHandler(validation.getAll), Reviewer.getAll);
router.post('/', authMiddleware(REVIEWER, 'write'), validationHandler(validation.create), Reviewer.post);
router.put('/:id', authMiddleware(REVIEWER, 'write'), validationHandler(validation.dataToUpdate), Reviewer.put);
router.delete('/:id', validationHandler(validation.delete), Reviewer.delete);



export default router;


