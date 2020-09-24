import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query, BadGatewayException  } from '@nestjs/common';
import CreateCheckVehicleLoadingAdrDTO from './dtos/checkvehicleloadingadr.dto';

import { CheckVehicleLoadingAdrService } from './checkvehicleloadingadr.service';


@Controller('checkvehicleloadingadr')
export class CheckVehicleLoadingAdrController {
  constructor(private checkvehicleloadingadrService: CheckVehicleLoadingAdrService) {  }

  @Post('/')
  async createPost(@Res() res, @Body() createCheckVehicleLoadingAdrDTO: CreateCheckVehicleLoadingAdrDTO)  {
    const checkvehicleloadingadr = await this.checkvehicleloadingadrService.createCheckVehicleLoadingAdr(createCheckVehicleLoadingAdrDTO);
    return res.status(HttpStatus.CREATED).json({
      checkvehicleloadingadr: checkvehicleloadingadr
    })
  }

}
