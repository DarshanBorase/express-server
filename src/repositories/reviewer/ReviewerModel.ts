import * as mongoose from 'mongoose';
import ReviewerSchema from './ReviewerSchema';
import IReviewerModel from './IReviewerModel';

export const reviewerSchema = new ReviewerSchema({
    collection: 'Reviewer',
});

export const reviewerModel: mongoose.Model<IReviewerModel> = mongoose.model<IReviewerModel>
(
    'Reviewer',
    reviewerSchema,
    'Reviewer',
    true,
);