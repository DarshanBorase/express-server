<<<<<<< HEAD
import { traineeRoute, userRoute, reviewerRoute } from './controllers';
=======
>>>>>>> 7567a65bdae3c30821be016ea44f31ed81debe56
import { Router } from 'express';

import { traineeRoute, userRoute }  from './controllers';

const router = Router();
/**
 * @swagger/
 * securityDefinitions:
 *  APIKeyHeader:
 *     type: apiKey
 *     in: header
 *     name: Authorization
 */

router.use('/trainee', traineeRoute);
router.use('/user', userRoute);
<<<<<<< HEAD
router.use('/reviewer', reviewerRoute);
export default router;
=======

export default router;

>>>>>>> 7567a65bdae3c30821be016ea44f31ed81debe56
