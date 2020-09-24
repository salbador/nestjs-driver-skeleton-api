import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { GetAuthPositions } from './interfaces/getauthpositions.interface';
import CreateGetAuthPositionsDTO from './dtos/getauthpositions.dto'


@Injectable()
export class GetAuthPositionsService {
  constructor(@InjectModel('GetAuthPositions') private readonly getauthpositionsModel: Model<GetAuthPositions>) {  }

  async createGetAuthPositions(createGetAuthPositionsDTO: CreateGetAuthPositionsDTO): Promise<GetAuthPositions>{
    const getauthpositions = new this.getauthpositionsModel(createGetAuthPositionsDTO);
    return await getauthpositions.save();
  }
}
