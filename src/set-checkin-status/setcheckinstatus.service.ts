import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { SetCheckinStatus } from './interfaces/setcheckinstatus.interface';
import CreateSetCheckinStatusDTO from './dtos/setcheckinstatus.dto'


@Injectable()
export class SetCheckinStatusService {
  constructor(@InjectModel('SetCheckinStatus') private readonly setcheckinstatusModel: Model<SetCheckinStatus>) {  }

  async createSetCheckinStatus(createSetCheckinStatusDTO: CreateSetCheckinStatusDTO): Promise<SetCheckinStatus>{
    const setcheckinstatus = new this.setcheckinstatusModel(createSetCheckinStatusDTO);
    return await setcheckinstatus.save();
  }
}
