import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query, BadGatewayException  } from '@nestjs/common';
import CreateGetAuthIdProfileDTO from './dtos/getauthidprofile.dto';

import { GetAuthIdProfileService } from './getauthidprofile.service';


@Controller('getauthidprofile')
export class GetAuthIdProfileController {
  constructor(private getauthidprofileService: GetAuthIdProfileService) {  }

  @Post('/')
  async createPost(@Res() res, @Body() createGetAuthIdProfileDTO: CreateGetAuthIdProfileDTO)  {
    const getauthidprofile = await this.getauthidprofileService.createGetAuthIdProfile(createGetAuthIdProfileDTO);
    return res.status(HttpStatus.CREATED).json({
      getauthidprofile: getauthidprofile
    })
  }

}
