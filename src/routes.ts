import { Router } from 'express';

import  TraineeRoutes  from './controllers';

const router = Router();

router.use('/trainee', TraineeRoutes);

export default router;