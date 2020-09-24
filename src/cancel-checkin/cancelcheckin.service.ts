import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CancelCheckin } from './interfaces/cancelcheckin.interface';
import CreateCancelCheckinDTO from './dtos/cancelcheckin.dto'


@Injectable()
export class CancelCheckinService {
  constructor(@InjectModel('CancelCheckin') private readonly cancelcheckinModel: Model<CancelCheckin>) {  }

  async createCancelCheckin(createCancelCheckinDTO: CreateCancelCheckinDTO): Promise<CancelCheckin>{
    const cancelcheckin = new this.cancelcheckinModel(createCancelCheckinDTO);
    return await cancelcheckin.save();
  }
}
