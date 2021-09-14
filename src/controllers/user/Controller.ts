import { Request, Response, Next } from 'express';
import UserRepository from '../../repositories/user/UserRepository';
import * as jwt from 'jsonwebtoken';
import config from '../../config/configuration';

class UserController {
  get = async (request: Request, response: Response): Promise < Response > => {
        const userRepository: UserRepository = new UserRepository();
        try {
          const {id , emailId} = request.user;
            const query = {
                _id : id,
                email: emailId
          };
            const result = await userRepository.find(query);
                return response
                .status(200)
                .send({ message: 'Fetched data successfully', data: result });
        } catch (error) {
            return response
            .status(400)
            .json({ status: 'Bad Request', message: error });
        }
  };

  post = async (request: Request, response: Response): Promise < Response > => {
    const userRepository: UserRepository = new UserRepository();
    try {
        const data = {
            name: request.body.name,
            email: request.body.email,
            role: request.body.role,
            password: request.body.password
        };
        await userRepository.create(data);
        return response
            .status(200)
            .send({ message: 'New Trainee Created Successfully'});
    } catch (error) {
      return response
        .status(400)
        .json({ status: 'Bad Request', message: error });
    }
  };

  put = async (request: Request, response: Response): Promise < Response > => {
    const userRepository: UserRepository = new UserRepository();
    try {
        const data = {
            _id : request.params.id,
            name: request.body.name,
            email: request.body.email,
            role: request.body.role,
            password: request.body.password
        };
        const result = await userRepository.update(data);
            return response
                .status(200)
                .send({ message: 'Updated trainee successfully', data: result});
    } catch (error) {
        return response
          .status(400)
          .json({ status: 'Bad Request', message: error });
    }
  };

    delete = async (request: Request, response: Response): Promise < Response > => {
    const userRepository: UserRepository = new UserRepository();
    try {
        const _id = request.params.id;
        await userRepository.delete({_id});
        return response
        .status(200)
        .send({ message: 'deleted trainee successfully'});
    } catch (error) {
      return response
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
export default new UserController ();