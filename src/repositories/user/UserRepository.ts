import * as mongoose from 'mongoose';
import { userModel } from './UserModel';
import IUserModel from './IUserModel';
import VersionableRepository from '../versionable/VersionableRepository';
import helper from '../../controllers/helper';
export default class UserRepository extends VersionableRepository <IUserModel, mongoose.Model<IUserModel>> {
    constructor() {
        super(userModel);
    }
    public static createObejectId() {
        return String(new mongoose.Types.ObjectId());
    }

    public findOne(query): mongoose.Query<mongoose.EnforceDocument<IUserModel, {}>, mongoose.EnforceDocument<IUserModel, {}>> {
        return super.findOne(query).lean();
    }

    public find(query, projection?: any, options?: any): mongoose.Query<mongoose.EnforceDocument<IUserModel, {}>[], mongoose.EnforceDocument<IUserModel, {}>> {
        return super.find(query, projection, options);
    }
    public count(): mongoose.Query<number, mongoose.EnforceDocument<IUserModel, {}>> {
        return super.count();
    }
    public async create(data: any): Promise<IUserModel> {
        console.log('UserRepository::create create', data);
        const hashPassword = await helper.hashPassword(data.password);
        data.password = hashPassword;
        return super.create(data);
    }
    public async update(data: any): Promise<IUserModel> {
        if (data.hasOwnProperty('password')) {
            const hashPassword = await helper.hashPassword(data.password);
            data.password = hashPassword;
        }
        return super.update(data);
    }
    public delete(filter, data: any) {
        return super.softdelete(filter, data);
    }
}