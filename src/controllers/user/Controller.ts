import { Request, Response, Next } from 'express';
import * as jwt from 'jsonwebtoken';
import config from '../../config/configuration';
import UserRepository from '../../repositories/user/UserRepository';

class User {
    get = (req: Request, res: Response): any => {
        const userRepository: UserRepository = new UserRepository();
        try {
            const query = {
                role: req.body.role
            };
            userRepository.find(query, (error, result) => {
                return res
                    .status(200)
                    .send({ message: 'Fetched data successfully', data: result });
            });
        } catch (error) {
            return res
                .status(400)
                .json({ message: 'Bad Request', status: error });
        }
    };
    post = (req: Request, res: Response): any => {
        const userRepository: UserRepository = new UserRepository();
        try {
            const data = {
                name: req.body.name,
                email: req.body.email,
                role: req.body.role,
                password: req.body.password
            };
            userRepository.create(data);
            return res
                .status(200)
                .send({ message: 'New Trainee Created Successfully' });
        } catch (error) {
            return res
                .status(400)
                .json({ message: 'Bad Request', status: error });
        }
    };

    put = (req: Request, res: Response): any => {
        const userRepository: UserRepository = new UserRepository();
        try {
            const data = {
                _id: req.params.id,
                name: req.body.name,
                email: req.body.email,
                role: req.body.role,
                password: req.body.password
            };
            userRepository.update(data).then((error, result) => {
                return res
                    .status(200)
                    .send({ message: 'Updated trainee successfully', data: result });
            });
        } catch (error) {
            return res
                .status(400)
                .json({ message: 'Bad Request', status: error });
        }
    };

    delete = (req: Request, res: Response): any => {
        const userRepository: UserRepository = new UserRepository();
        try {
            const _id = req.params.id;
            userRepository.delete({ _id });
            return res
                .status(200)
                .send({ message: 'deleted trainee successfully' });
        } catch (error) {
            return res
                .status(400)
                .json({ status: 'Bad Request', message: error });
        }
    };
    createToken = (req: Request, res: Response, next: Next) => {
        const token = jwt.sign(req.body, config.secret, { expiresIn: '10h' });
        console.log(token);
        return res.status(200).send({ message: 'Token successfully created', data: { token }, status: 'success'});
        }
}
export default new User();
