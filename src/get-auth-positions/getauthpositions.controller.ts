import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query, BadGatewayException  } from '@nestjs/common';
import CreateGetAuthPositionsDTO from './dtos/getauthpositions.dto';

import { GetAuthPositionsService } from './getauthpositions.service';


@Controller('getauthpositions')
export class GetAuthPositionsController {
  constructor(private getauthpositionsService: GetAuthPositionsService) {  }

  @Post('/')
  async createPost(@Res() res, @Body() createGetAuthPositionsDTO: CreateGetAuthPositionsDTO)  {
    const getauthpositions = await this.getauthpositionsService.createGetAuthPositions(createGetAuthPositionsDTO);
    return res.status(HttpStatus.CREATED).json({
      getauthpositions: getauthpositions
    })
  }

}
