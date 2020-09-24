import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { GetTerminalShifts } from './interfaces/getterminalshifts.interface';
import CreateGetTerminalShiftsDTO from './dtos/getterminalshifts.dto'


@Injectable()
export class GetTerminalShiftsService {
  constructor(@InjectModel('GetTerminalShifts') private readonly getterminalshiftsModel: Model<GetTerminalShifts>) {  }

  async createGetTerminalShifts(createGetTerminalShiftsDTO: CreateGetTerminalShiftsDTO): Promise<GetTerminalShifts>{
    const getterminalshifts = new this.getterminalshiftsModel(createGetTerminalShiftsDTO);
    return await getterminalshifts.save();
  }
}
