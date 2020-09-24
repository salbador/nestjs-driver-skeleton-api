import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query, BadGatewayException  } from '@nestjs/common';
import CreateGetWeightDTO from './dtos/getweight.dto';

import { GetWeightService } from './getweight.service';


@Controller('getweight')
export class GetWeightController {
  constructor(private getweightService: GetWeightService) {  }

  @Post('/')
  async createPost(@Res() res, @Body() createGetWeightDTO: CreateGetWeightDTO)  {
    const getweight = await this.getweightService.createGetWeight(createGetWeightDTO);
    return res.status(HttpStatus.CREATED).json({
      getweight: getweight
    })
  }

}
