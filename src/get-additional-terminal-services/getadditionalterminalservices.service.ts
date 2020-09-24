import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { GetAdditionalTerminalServices } from './interfaces/getadditionalterminalservices.interface';
import CreateGetAdditionalTerminalServicesDTO from './dtos/getadditionalterminalservices.dto'


@Injectable()
export class GetAdditionalTerminalServicesService {
  constructor(@InjectModel('GetAdditionalTerminalServices') private readonly getadditionalterminalservicesModel: Model<GetAdditionalTerminalServices>) {  }

  async createGetAdditionalTerminalServices(createGetAdditionalTerminalServicesDTO: CreateGetAdditionalTerminalServicesDTO): Promise<GetAdditionalTerminalServices>{
    const getadditionalterminalservices = new this.getadditionalterminalservicesModel(createGetAdditionalTerminalServicesDTO);
    return await getadditionalterminalservices.save();
  }
}
