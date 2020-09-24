import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { GetCheckinHeaders } from './interfaces/getcheckinheaders.interface';
import CreateGetCheckinHeadersDTO from './dtos/getcheckinheaders.dto'


@Injectable()
export class GetCheckinHeadersService {
  constructor(@InjectModel('GetCheckinHeaders') private readonly getcheckinheadersModel: Model<GetCheckinHeaders>) {  }

  async createGetCheckinHeaders(createGetCheckinHeadersDTO: CreateGetCheckinHeadersDTO): Promise<GetCheckinHeaders>{
    const getcheckinheaders = new this.getcheckinheadersModel(createGetCheckinHeadersDTO);
    return await getcheckinheaders.save();
  }
}
