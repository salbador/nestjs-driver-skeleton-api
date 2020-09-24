import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CheckTransportAvailability } from './interfaces/checktransportavailability.interface';
import CreateCheckTransportAvailabilityDTO from './dtos/checktransportavailability.dto'


@Injectable()
export class CheckTransportAvailabilityService {
  constructor(@InjectModel('CheckTransportAvailability') private readonly checktransportavailabilityModel: Model<CheckTransportAvailability>) {  }

  async createCheckTransportAvailability(createCheckTransportAvailabilityDTO: CreateCheckTransportAvailabilityDTO): Promise<CheckTransportAvailability>{
    const checktransportavailability = new this.checktransportavailabilityModel(createCheckTransportAvailabilityDTO);
    return await checktransportavailability.save();
  }
}
