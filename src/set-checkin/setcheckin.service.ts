import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { SetCheckin } from './interfaces/setcheckin.interface';
import CreateSetCheckinDTO from './dtos/setcheckin.dto'


@Injectable()
export class SetCheckinService {
  constructor(@InjectModel('SetCheckin') private readonly setcheckinModel: Model<SetCheckin>) {  }

  async createSetCheckin(createSetCheckinDTO: CreateSetCheckinDTO): Promise<SetCheckin>{
    const setcheckin = new this.setcheckinModel(createSetCheckinDTO);
    return await setcheckin.save();
  }
}
