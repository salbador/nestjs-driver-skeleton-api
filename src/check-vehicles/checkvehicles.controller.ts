import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query, BadGatewayException  } from '@nestjs/common';
import CreateCheckVehiclesDTO from './dtos/checkvehicles.dto';

import { CheckVehiclesService } from './checkvehicles.service';


@Controller('checkvehicles')
export class CheckVehiclesController {
  constructor(private checkvehiclesService: CheckVehiclesService) {  }

  @Post('/')
  async createPost(@Res() res, @Body() createCheckVehiclesDTO: CreateCheckVehiclesDTO)  {
    const checkvehicles = await this.checkvehiclesService.createCheckVehicles(createCheckVehiclesDTO);
    return res.status(HttpStatus.CREATED).json({
      checkvehicles: checkvehicles
    })
  }

}
