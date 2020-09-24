import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query, BadGatewayException  } from '@nestjs/common';
import CreateCheckDriverDTO from './dtos/checkdriver.dto';

import { CheckDriverService } from './checkdriver.service';


@Controller('checkdriver')
export class CheckDriverController {
  constructor(private checkdriverService: CheckDriverService) {  }

  @Post('/')
  async createPost(@Res() res, @Body() createCheckDriverDTO: CreateCheckDriverDTO)  {
    const checkdriver = await this.checkdriverService.createCheckDriver(createCheckDriverDTO);
    return res.status(HttpStatus.CREATED).json({
      checkdriver: checkdriver
    })
  }

}
