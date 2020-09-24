import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query, BadGatewayException  } from '@nestjs/common';
import CreateGetAdditionalTerminalServicesDTO from './dtos/getadditionalterminalservices.dto';

import { GetAdditionalTerminalServicesService } from './getadditionalterminalservices.service';


@Controller('getadditionalterminalservices')
export class GetAdditionalTerminalServicesController {
  constructor(private getadditionalterminalservicesService: GetAdditionalTerminalServicesService) {  }

  @Post('/')
  async createPost(@Res() res, @Body() createGetAdditionalTerminalServicesDTO: CreateGetAdditionalTerminalServicesDTO)  {
    const getadditionalterminalservices = await this.getadditionalterminalservicesService.createGetAdditionalTerminalServices(createGetAdditionalTerminalServicesDTO);
    return res.status(HttpStatus.CREATED).json({
      getadditionalterminalservices: getadditionalterminalservices
    })
  }

}
