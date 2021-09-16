import * as mongoose from 'mongoose';

export default class VersionableRepository<D extends mongoose.Document, M extends mongoose.Model<D>> {

    private model: M;
    constructor(model) {
        this.model = model;
    }

    protected static createObjectId() {
        return String(new mongoose.Types.ObjectId());
    }

    protected findOne(query: any): mongoose.Query<mongoose.EnforceDocument<D, {}>, mongoose.EnforceDocument<D, {}>> {
        const finalQuery = { deletedAt: undefined, ...query };
        return this.model.findOne(finalQuery).lean();
    }

    protected find(query, projection?: any, options?: any): mongoose.Query<mongoose.EnforceDocument<D, {}>[], mongoose.EnforceDocument<D, {}>> {
        const finalQuery = {deletedAt: undefined, ...query};
        return this.model.find(finalQuery, projection, options);
    }


    protected count(): mongoose.Query<number, mongoose.EnforceDocument<D, {}>> {
        const finalQuery = { deletedAt: undefined };
        return this.model.count(finalQuery);
    }

    protected create(data: any): Promise<D> {
        console.log('UserRepository::create create', data);
        const id = VersionableRepository.createObjectId();
        console.log(id);
        const model = new this.model({
            _id: id,
            originalId: id,
            ...data,
        });
        return model.save();
    }
    protected async update(data: any): Promise<D> {
        console.log('UserRepository:: update', data);
        const previousRecord = await this.findOne({ originalId: data.originalId });
        console.log(previousRecord);
        if (previousRecord) {
            await this.softdelete({ originalId: data.originalId, deletedAt: undefined }, { deletedAt: Date.now() });
        } else {
            return undefined;
        }
        const newData = { ...previousRecord, ...data };
        console.log(newData);
        newData._id = VersionableRepository.createObjectId();
        delete newData.deletedAt;
        const model = new this.model(newData);
        return model.save();
    }
    protected softdelete(filter, data): mongoose.Query<any, mongoose.EnforceDocument<D, {}>> {
         return this.model.updateOne(filter, data);
    }
}