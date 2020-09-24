import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { GetVehicleInfo } from './interfaces/getvehicleinfo.interface';
import CreateGetVehicleInfoDTO from './dtos/getvehicleinfo.dto'


@Injectable()
export class GetVehicleInfoService {
  constructor(@InjectModel('GetVehicleInfo') private readonly getvehicleinfoModel: Model<GetVehicleInfo>) {  }

  async createGetVehicleInfo(createGetVehicleInfoDTO: CreateGetVehicleInfoDTO): Promise<GetVehicleInfo>{
    const getvehicleinfo = new this.getvehicleinfoModel(createGetVehicleInfoDTO);
    return await getvehicleinfo.save();
  }
}
