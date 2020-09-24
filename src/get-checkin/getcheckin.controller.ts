import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query, BadGatewayException  } from '@nestjs/common';
import CreateGetCheckinDTO from './dtos/getcheckin.dto';

import { GetCheckinService } from './getcheckin.service';


@Controller('getcheckin')
export class GetCheckinController {
  constructor(private getcheckinService: GetCheckinService) {  }

  @Post('/')
  async createPost(@Res() res, @Body() createGetCheckinDTO: CreateGetCheckinDTO)  {
    const getcheckin = await this.getcheckinService.createGetCheckin(createGetCheckinDTO);
    return res.status(HttpStatus.CREATED).json({
      getcheckin: getcheckin
    })
  }

}
