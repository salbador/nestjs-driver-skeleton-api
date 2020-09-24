import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { GetCheckin } from './interfaces/getcheckin.interface';
import CreateGetCheckinDTO from './dtos/getcheckin.dto'


@Injectable()
export class GetCheckinService {
  constructor(@InjectModel('GetCheckin') private readonly getcheckinModel: Model<GetCheckin>) {  }

  async createGetCheckin(createGetCheckinDTO: CreateGetCheckinDTO): Promise<GetCheckin>{
    const getcheckin = new this.getcheckinModel(createGetCheckinDTO);
    return await getcheckin.save();
  }
}
