import * as mongoose from 'mongoose';
import VersionableSchema from '../versionable/VersionableSchema';

class UserSchema extends VersionableSchema {

    constructor(collections: any) {
        const baseSchema = Object.assign({
            _id: String,
            userId: String,
            communication: String,
            codeQuality: String,
            goodPoints: String,
            badPoints: String,
            improvementRequired: String
    });
    super(baseSchema, collections);
}
}
export default UserSchema;