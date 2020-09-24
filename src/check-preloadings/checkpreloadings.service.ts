import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CheckPreloadings } from './interfaces/checkpreloadings.interface';
import CreateCheckPreloadingsDTO from './dtos/checkpreloadings.dto'


@Injectable()
export class CheckPreloadingsService {
  constructor(@InjectModel('CheckPreloadings') private readonly checkpreloadingsModel: Model<CheckPreloadings>) {  }

  async createCheckPreloadings(createCheckPreloadingsDTO: CreateCheckPreloadingsDTO): Promise<CheckPreloadings>{
    const checkpreloadings = new this.checkpreloadingsModel(createCheckPreloadingsDTO);
    return await checkpreloadings.save();
  }
}
