import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CheckVehicleLoadingAdr } from './interfaces/checkvehicleloadingadr.interface';
import CreateCheckVehicleLoadingAdrDTO from './dtos/checkvehicleloadingadr.dto'


@Injectable()
export class CheckVehicleLoadingAdrService {
  constructor(@InjectModel('CheckVehicleLoadingAdr') private readonly checkvehicleloadingadrModel: Model<CheckVehicleLoadingAdr>) {  }

  async createCheckVehicleLoadingAdr(createCheckVehicleLoadingAdrDTO: CreateCheckVehicleLoadingAdrDTO): Promise<CheckVehicleLoadingAdr>{
    const checkvehicleloadingadr = new this.checkvehicleloadingadrModel(createCheckVehicleLoadingAdrDTO);
    return await checkvehicleloadingadr.save();
  }
}
