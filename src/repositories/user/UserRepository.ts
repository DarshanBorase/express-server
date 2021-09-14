import * as mongoose from 'mongoose';
import { userModel } from './UserModel';
import IUserModel from './IUserModel';

export default class UserRepository {
    public static createObejectId() {
        return String(new mongoose.Types.ObjectId());
    }

    public findOne(query): mongoose.Query<IUserModel, IUserModel> {
        return userModel.findOne(query).lean();
    }

    public find(query, projection?: any, options?: any): mongoose.Query<IUserModel[], IUserModel> {
        return userModel.find(query, projection, options);
    }
    public count(): mongoose.Query<number, IUserModel> {
        return userModel.count();
    }
    public create(data: any): Promise<IUserModel> {
        console.log('UserRepository::create create', data);
        const id = UserRepository.createObejectId();
        const model = new userModel({
            _id: id,
            ...data,
        });
        return model.save();
    }
    public update(data: any): mongoose.UpdateQuery<IUserModel> {
        const { _id , ...userData} = data;
        return userModel.updateOne({_id} , { ...userData});
    }
    public delete(data: any) {
        const result = userModel.deleteOne(data);
        return result;
    }
}