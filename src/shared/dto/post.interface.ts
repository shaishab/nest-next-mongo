import { Document, ObjectId } from 'mongoose';

export interface IPost extends Document {
  readonly _id?: ObjectId;
  title: string;
  slug: string;
  content: string;
  metaContent: string;
}
