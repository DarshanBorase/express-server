import { traineeRoute, userRoute, reviewerRoute } from './controllers';
import { Router } from 'express';
const router  = Router();
// use trainee router
router.use('/trainee', traineeRoute);
router.use('/user', userRoute);
router.use('/reviewer', reviewerRoute);
export default router;