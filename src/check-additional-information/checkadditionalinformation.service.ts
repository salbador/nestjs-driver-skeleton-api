import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CheckAdditionalInformation } from './interfaces/checkadditionalinformation.interface';
import CreateCheckAdditionalInformationDTO from './dtos/checkadditionalinformation.dto'


@Injectable()
export class CheckAdditionalInformationService {
  constructor(@InjectModel('CheckAdditionalInformation') private readonly checkadditionalinformationModel: Model<CheckAdditionalInformation>) {  }

  async createCheckAdditionalInformation(createCheckAdditionalInformationDTO: CreateCheckAdditionalInformationDTO): Promise<CheckAdditionalInformation>{
    const checkadditionalinformation = new this.checkadditionalinformationModel(createCheckAdditionalInformationDTO);
    return await checkadditionalinformation.save();
  }
}
