import { Router } from 'express';
import TraineeRoutes  from './Controller';

const router = Router();

router.get('/', TraineeRoutes.get);
router.post('/', TraineeRoutes.post);
router.put('/:name', TraineeRoutes.put);
router.delete('/:name', TraineeRoutes.delete);
export default router;