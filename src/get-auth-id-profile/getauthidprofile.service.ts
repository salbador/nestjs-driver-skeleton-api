import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { GetAuthIdProfile } from './interfaces/getauthidprofile.interface';
import CreateGetAuthIdProfileDTO from './dtos/getauthidprofile.dto'


@Injectable()
export class GetAuthIdProfileService {
  constructor(@InjectModel('GetAuthIdProfile') private readonly getauthidprofileModel: Model<GetAuthIdProfile>) {  }

  async createGetAuthIdProfile(createGetAuthIdProfileDTO: CreateGetAuthIdProfileDTO): Promise<GetAuthIdProfile>{
    const getauthidprofile = new this.getauthidprofileModel(createGetAuthIdProfileDTO);
    return await getauthidprofile.save();
  }
}
