import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CheckDriver } from './interfaces/checkdriver.interface';
import CreateCheckDriverDTO from './dtos/checkdriver.dto'


@Injectable()
export class CheckDriverService {
  constructor(@InjectModel('CheckDriver') private readonly checkdriverModel: Model<CheckDriver>) {  }

  async createCheckDriver(createCheckDriverDTO: CreateCheckDriverDTO): Promise<CheckDriver>{
    const checkdriver = new this.checkdriverModel(createCheckDriverDTO);
    return await checkdriver.save();
  }
}
