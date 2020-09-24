import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query, BadGatewayException  } from '@nestjs/common';
import CreateInitiateWeigingDTO from './dtos/initiateweiging.dto';

import { InitiateWeigingService } from './initiateweiging.service';


@Controller('initiateweiging')
export class InitiateWeigingController {
  constructor(private initiateweigingService: InitiateWeigingService) {  }

  @Post('/')
  async createPost(@Res() res, @Body() createInitiateWeigingDTO: CreateInitiateWeigingDTO)  {
    const initiateweiging = await this.initiateweigingService.createInitiateWeiging(createInitiateWeigingDTO);
    return res.status(HttpStatus.CREATED).json({
      initiateweiging: initiateweiging
    })
  }

}
