import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CheckVehicles } from './interfaces/checkvehicles.interface';
import CreateCheckVehiclesDTO from './dtos/checkvehicles.dto'


@Injectable()
export class CheckVehiclesService {
  constructor(@InjectModel('CheckVehicles') private readonly checkvehiclesModel: Model<CheckVehicles>) {  }

  async createCheckVehicles(createCheckVehiclesDTO: CreateCheckVehiclesDTO): Promise<CheckVehicles>{
    const checkvehicles = new this.checkvehiclesModel(createCheckVehiclesDTO);
    return await checkvehicles.save();
  }
}
