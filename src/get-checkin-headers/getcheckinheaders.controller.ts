import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query, BadGatewayException  } from '@nestjs/common';
import CreateGetCheckinHeadersDTO from './dtos/getcheckinheaders.dto';

import { GetCheckinHeadersService } from './getcheckinheaders.service';


@Controller('getcheckinheaders')
export class GetCheckinHeadersController {
  constructor(private getcheckinheadersService: GetCheckinHeadersService) {  }

  @Post('/')
  async createPost(@Res() res, @Body() createGetCheckinHeadersDTO: CreateGetCheckinHeadersDTO)  {
    const getcheckinheaders = await this.getcheckinheadersService.createGetCheckinHeaders(createGetCheckinHeadersDTO);
    return res.status(HttpStatus.CREATED).json({
      getcheckinheaders: getcheckinheaders
    })
  }

}
