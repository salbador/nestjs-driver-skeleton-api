import { Document } from 'mongoose';

export interface CheckCompartmentPositions extends Document {
  readonly name: string;
  readonly description: string;
  readonly imageURL: string;
  readonly price: number;
  readonly createdAt: Date;
}
