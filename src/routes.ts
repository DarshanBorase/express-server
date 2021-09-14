import { traineeRoute, userRoute } from './controllers';
import { Router } from 'express';
const router  = Router();
// use trainee router
router.use('/trainee', traineeRoute);
router.use('/user', userRoute);
export default router;