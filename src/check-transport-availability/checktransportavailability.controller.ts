import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query, BadGatewayException  } from '@nestjs/common';
import CreateCheckTransportAvailabilityDTO from './dtos/checktransportavailability.dto';

import { CheckTransportAvailabilityService } from './checktransportavailability.service';


@Controller('checktransportavailability')
export class CheckTransportAvailabilityController {
  constructor(private checktransportavailabilityService: CheckTransportAvailabilityService) {  }

  @Post('/')
  async createPost(@Res() res, @Body() createCheckTransportAvailabilityDTO: CreateCheckTransportAvailabilityDTO)  {
    const checktransportavailability = await this.checktransportavailabilityService.createCheckTransportAvailability(createCheckTransportAvailabilityDTO);
    return res.status(HttpStatus.CREATED).json({
      checktransportavailability: checktransportavailability
    })
  }

}
