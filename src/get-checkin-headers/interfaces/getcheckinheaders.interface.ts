import { Document } from 'mongoose';

export interface GetCheckinHeaders extends Document {
  readonly name: string;
  readonly description: string;
  readonly imageURL: string;
  readonly price: number;
  readonly createdAt: Date;
}
