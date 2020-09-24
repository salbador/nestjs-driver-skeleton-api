import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query, BadGatewayException  } from '@nestjs/common';
import CreateSetAdditionalTerminalServicesDTO from './dtos/setadditionalterminalservices.dto';

import { SetAdditionalTerminalServicesService } from './setadditionalterminalservices.service';


@Controller('setadditionalterminalservices')
export class SetAdditionalTerminalServicesController {
  constructor(private setadditionalterminalservicesService: SetAdditionalTerminalServicesService) {  }

  @Post('/')
  async createPost(@Res() res, @Body() createSetAdditionalTerminalServicesDTO: CreateSetAdditionalTerminalServicesDTO)  {
    const setadditionalterminalservices = await this.setadditionalterminalservicesService.createSetAdditionalTerminalServices(createSetAdditionalTerminalServicesDTO);
    return res.status(HttpStatus.CREATED).json({
      setadditionalterminalservices: setadditionalterminalservices
    })
  }

}
