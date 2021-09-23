import { Router } from 'express';
import user  from './Controller';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
import authMiddleware from '../../libs/routes/authMiddleware';
import { USER } from '../../libs/constant';
import UserRoutes from '.';

const router = Router();
/**
 * @swagger
 * definitions:
 *   UserSchema:
 *        properties:
 *             _id:
 *                  type: string
 *             id:
 *                  type: string
 *             originalId:
 *                  type: string
 *             name:
 *                  type: string
 *             email:
 *                  type: string
 *             password:
 *                  type: string
 *             createdAt:
 *                  type: string
 *             deletedAt:
 *                  type: string
 *   Users:
 *        type: array
 *        item:
 *        $ref: '#/definitions/UserSchema'
 *   User:
 *        type: array
 *        $ref: '#/definitions/UserSchema'
 *   UserListResponse:
 *        properties:
 *             message:
 *                  type: string
 *                  example: Success
 *             status:
 *                  type: integer
 *                  example: 200
 *             data:
 *                  $ref: '#/definitions/User'
 *   UserByIdGetResponse:
 *        properties:
 *             message:
 *                  type: string
 *                  example: Success
 *             status:
 *                  type: integer
 *                  example: 200
 *             data:
 *                  $ref: '#/definitions/User'
 */

/**
 * @swagger
 * /user:
 *   get:
 *        tags: [USER]
 *        description: Returns all the user
 *        security:
 *             - bearerAuth: []
 *        responses :
 *             200:
 *                  description: Array of user
 *                  schema:
 *                       $ref: '#/definitions/UserListResponse'
 */



router.get('/', authMiddleware(USER, 'read'), validationHandler(validation.getAll), user.getAll);

/**
 * @swagger
 * /user:
 *   post:
 *     description: Create New User
 *     tags: [USER]
 *     requestBody:
 *        description: Enter name,email,password,role to create new user
 *        required: true
 *        content:
 *           application/json:
 *            schema:
 *             type: object
 *             required:
 *              -email
 *              -password
 *              -role
 *              -name
 *             properties:
 *               name:
 *                type: string
 *               role:
 *                type: string
 *               email:
 *                type: string
 *               password:
 *                type: string
 *     responses:
 *         201:
 *           description: created user successfully
 */

router.post('/', authMiddleware(USER, 'write'), validationHandler(validation.create), user.post);


/**
 * @swagger
 * /user/{id}:
 *   put:
 *     description: Update existing User
 *     tags: [User]
 *     consumes:
 *         - application/json
 *     produces:
 *         - application/json
 *     parameters:
 *         - in: path
 *           name: id
 *           schema:
 *            type: string
 *           required: true
 *           description: originalId of the user
 *     requestBody:
 *        description: Enter field for update user
 *        required: true
 *        content:
 *           application/json:
 *            schema:
 *             type: object
 *             required:
 *              -email
 *             properties:
 *               email:
 *                type: string
 *               role:
 *                type: string
 *               password:
 *                type: string
 *     responses:
 *         200:
 *           description: User updated successfully
 */

router.put('/:id', authMiddleware(USER, 'write'), validationHandler(validation.update), user.put);


/**
 * @swagger
 * /user/{id}:
 *   delete:
 *     description: Delete User
 *     tags: [USER]
 *     parameters:
 *         - in: path
 *           name: id
 *           schema:
 *            type: string
 *           required: true
 *           description: id of the user
 *     responses:
 *         200:
 *           description: user deleted successfully
 */


router.delete('/:id', authMiddleware(USER, 'delete'), validationHandler(validation.delete), user.delete);

/**
 * @swagger
 * /user/createToken:
 *   post:
 *        description: To generate authorization token
 *        tags: [USER]
 *        requestBody:
 *              description: Enter email and password to generate token
 *              required: true
 *              content:
 *                 application/json:
 *                    schema:
 *                        type: object
 *                        required:
 *                          -email
 *                          -password
 *                        properties:
 *                            email:
 *                               type: string
 *
 *                            password:
 *                               type: string
 *
 *
 *        responses:
 *                  200:
 *                      description: Token genrated
 */
router.post('/createToken', user.createToken);

export default router;