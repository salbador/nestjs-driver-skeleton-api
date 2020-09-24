import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ConvertToUom } from './interfaces/converttouom.interface';
import CreateConvertToUomDTO from './dtos/converttouom.dto'


@Injectable()
export class ConvertToUomService {
  constructor(@InjectModel('ConvertToUom') private readonly converttouomModel: Model<ConvertToUom>) {  }

  async createConvertToUom(createConvertToUomDTO: CreateConvertToUomDTO): Promise<ConvertToUom>{
    const converttouom = new this.converttouomModel(createConvertToUomDTO);
    return await converttouom.save();
  }
}
