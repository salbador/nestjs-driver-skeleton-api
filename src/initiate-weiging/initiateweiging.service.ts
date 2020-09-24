import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { InitiateWeiging } from './interfaces/initiateweiging.interface';
import CreateInitiateWeigingDTO from './dtos/initiateweiging.dto'


@Injectable()
export class InitiateWeigingService {
  constructor(@InjectModel('InitiateWeiging') private readonly initiateweigingModel: Model<InitiateWeiging>) {  }

  async createInitiateWeiging(createInitiateWeigingDTO: CreateInitiateWeigingDTO): Promise<InitiateWeiging>{
    const initiateweiging = new this.initiateweigingModel(createInitiateWeigingDTO);
    return await initiateweiging.save();
  }
}
