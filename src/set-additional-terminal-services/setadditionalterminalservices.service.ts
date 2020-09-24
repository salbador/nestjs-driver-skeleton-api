import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { SetAdditionalTerminalServices } from './interfaces/setadditionalterminalservices.interface';
import CreateSetAdditionalTerminalServicesDTO from './dtos/setadditionalterminalservices.dto'


@Injectable()
export class SetAdditionalTerminalServicesService {
  constructor(@InjectModel('SetAdditionalTerminalServices') private readonly setadditionalterminalservicesModel: Model<SetAdditionalTerminalServices>) {  }

  async createSetAdditionalTerminalServices(createSetAdditionalTerminalServicesDTO: CreateSetAdditionalTerminalServicesDTO): Promise<SetAdditionalTerminalServices>{
    const setadditionalterminalservices = new this.setadditionalterminalservicesModel(createSetAdditionalTerminalServicesDTO);
    return await setadditionalterminalservices.save();
  }
}
