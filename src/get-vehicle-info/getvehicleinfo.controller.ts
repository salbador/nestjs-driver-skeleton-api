import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query, BadGatewayException  } from '@nestjs/common';
import CreateGetVehicleInfoDTO from './dtos/getvehicleinfo.dto';

import { GetVehicleInfoService } from './getvehicleinfo.service';


@Controller('getvehicleinfo')
export class GetVehicleInfoController {
  constructor(private getvehicleinfoService: GetVehicleInfoService) {  }

  @Post('/')
  async createPost(@Res() res, @Body() createGetVehicleInfoDTO: CreateGetVehicleInfoDTO)  {
    const getvehicleinfo = await this.getvehicleinfoService.createGetVehicleInfo(createGetVehicleInfoDTO);
    return res.status(HttpStatus.CREATED).json({
      getvehicleinfo: getvehicleinfo
    })
  }

}
