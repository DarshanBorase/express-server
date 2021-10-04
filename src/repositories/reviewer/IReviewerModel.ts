import * as mongoose from 'mongoose';

export default interface IReviewerModel extends mongoose.Document {
    id: string;
    userId: string;
    communication: string;
    codeQuality: string;
    goodPoints: string;
    badPoints: string;
    improvementRequired: string;
}