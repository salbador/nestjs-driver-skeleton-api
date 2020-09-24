import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { GetAdditionalInfoTermplates } from './interfaces/getadditionalinfotermplates.interface';
import CreateGetAdditionalInfoTermplatesDTO from './dtos/getadditionalinfotermplates.dto'


@Injectable()
export class GetAdditionalInfoTermplatesService {
  constructor(@InjectModel('GetAdditionalInfoTermplates') private readonly getadditionalinfotermplatesModel: Model<GetAdditionalInfoTermplates>) {  }

  async createGetAdditionalInfoTermplates(createGetAdditionalInfoTermplatesDTO: CreateGetAdditionalInfoTermplatesDTO): Promise<GetAdditionalInfoTermplates>{
    const getadditionalinfotermplates = new this.getadditionalinfotermplatesModel(createGetAdditionalInfoTermplatesDTO);
    return await getadditionalinfotermplates.save();
  }
}
