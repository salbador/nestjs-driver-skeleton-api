import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query, BadGatewayException  } from '@nestjs/common';
import CreateCheckAdditionalInformationDTO from './dtos/checkadditionalinformation.dto';

import { CheckAdditionalInformationService } from './checkadditionalinformation.service';


@Controller('checkadditionalinformation')
export class CheckAdditionalInformationController {
  constructor(private checkadditionalinformationService: CheckAdditionalInformationService) {  }

  @Post('/')
  async createPost(@Res() res, @Body() createCheckAdditionalInformationDTO: CreateCheckAdditionalInformationDTO)  {
    const checkadditionalinformation = await this.checkadditionalinformationService.createCheckAdditionalInformation(createCheckAdditionalInformationDTO);
    return res.status(HttpStatus.CREATED).json({
      checkadditionalinformation: checkadditionalinformation
    })
  }

}
