import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CheckDriverLoadingAdr } from './interfaces/checkdriverloadingadr.interface';
import CreateCheckDriverLoadingAdrDTO from './dtos/checkdriverloadingadr.dto'


@Injectable()
export class CheckDriverLoadingAdrService {
  constructor(@InjectModel('CheckDriverLoadingAdr') private readonly checkdriverloadingadrModel: Model<CheckDriverLoadingAdr>) {  }

  async createCheckDriverLoadingAdr(createCheckDriverLoadingAdrDTO: CreateCheckDriverLoadingAdrDTO): Promise<CheckDriverLoadingAdr>{
    const checkdriverloadingadr = new this.checkdriverloadingadrModel(createCheckDriverLoadingAdrDTO);
    return await checkdriverloadingadr.save();
  }
}
