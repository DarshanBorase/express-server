import { Request, Response, Next } from 'express';
import ReviewerRepository from '../../repositories/reviewer/ReviewerRepository';
import * as jwt from 'jsonwebtoken';
import config from '../../config/configuration';
import * as bcrypt from 'bcrypt';
import { TRAINEE, LIMIT, SKIP } from '../../libs/constant';

class Reviewer {
  get = async (request: Request, response: Response): Promise < Response > => {
        const reviewerRepository: ReviewerRepository = new ReviewerRepository();
        try {
            const {id , emailID} = request.user;
            const query = {
                _id : id,
                // userId: request.body.userId,
                // communication: request.body.communication,
                // codeQuality: request.body.codeQuality,
                // goodPoints: request.body.goodPoints,
                // badPoints: request.body.badPoints,
                // improvementRequired: request.body.improvementRequired,
            };
            console.log(query);
            const result = await reviewerRepository.find(query);
                return response
                .status(200)
                .send({ message: 'Fetched data successfully', data: result });
        } catch (error) {
            return response
            .status(400)
            .json({ status: 'Bad Request', message: error });
        }
  };
  getAll = async (request: Request, response: Response): Promise<Response> => {
    const reviewerRepository: ReviewerRepository = new ReviewerRepository();
    try {
        const { skip = SKIP, limit = LIMIT, sort = { createdAt: -1 } } = request.query;
        console.log({ skip, limit, sort });
        const _result = await reviewerRepository.find({ userId: request.body.userId }, undefined, { skip, limit, sort });
        const _count = await reviewerRepository.count();
        const _data = [{ count: _count, result: _result }];
        return response
            .status(200)
            .send({ message: 'Fetched data successfully', data: _data });
    } catch (error) {
        return response
            .status(400)
            .json({ status: 'Bad Request', message: error });
    }
};
  post = async (request: Request, response: Response): Promise < Response > => {
    const reviewerRepository: ReviewerRepository = new ReviewerRepository();
    try {
        const data = {
            userId: request.body.userId,
            communication: request.body.communication,
            codeQuality: request.body.codeQuality,
            goodPoints: request.body.goodPoints,
            badPoints: request.body.badPoints,
            improvementRequired: request.body.improvementRequired,
            deletedAt: undefined
        };
        await reviewerRepository.create(data);
        return response
            .status(200)
            .send({ message: 'feedback Created Successfully'});
    } catch (error) {
      return response
        .status(400)
        .json({ status: 'Bad Request', message: error });
    }
  };

  put = async (request: Request, response: Response): Promise < Response > => {
    const reviewerRepository: ReviewerRepository = new ReviewerRepository();
    try {
      const data = {
        originalId : request.params.id,
        ...request.body
    };
        const result = await reviewerRepository.update(data);
            return response
                .status(200)
                .send({ message: 'feedback Updated successfully', data: result});
    } catch (error) {
        return response
          .status(400)
          .json({ status: 'Bad Request', message: error });
    }
  };

    delete = async (request: Request, response: Response): Promise < Response > => {
    const reviewerRepository: ReviewerRepository = new ReviewerRepository();
    try {
        const _id = request.params.id;
        await reviewerRepository.delete({_id}, {originalID: _id, deletedAt: new Date()});
        return response
        .status(200)
        .send({ message: 'feedback deleted successfully'});
    } catch (error) {
      return response
        .status(400)
        .json({ status: 'Bad Request', message: error });
    }
  };
}
export default new Reviewer();