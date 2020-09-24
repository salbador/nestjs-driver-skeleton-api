import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { GetWeight } from './interfaces/getweight.interface';
import CreateGetWeightDTO from './dtos/getweight.dto'


@Injectable()
export class GetWeightService {
  constructor(@InjectModel('GetWeight') private readonly getweightModel: Model<GetWeight>) {  }

  async createGetWeight(createGetWeightDTO: CreateGetWeightDTO): Promise<GetWeight>{
    const getweight = new this.getweightModel(createGetWeightDTO);
    return await getweight.save();
  }
}
