import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query, BadGatewayException  } from '@nestjs/common';
import CreateCancelCheckinDTO from './dtos/cancelcheckin.dto';

import { CancelCheckinService } from './cancelcheckin.service';


@Controller('cancelcheckin')
export class CancelCheckinController {
  constructor(private cancelcheckinService: CancelCheckinService) {  }

  @Post('/')
  async createPost(@Res() res, @Body() createCancelCheckinDTO: CreateCancelCheckinDTO)  {
    const cancelcheckin = await this.cancelcheckinService.createCancelCheckin(createCancelCheckinDTO);
    return res.status(HttpStatus.CREATED).json({
      cancelcheckin: cancelcheckin
    })
  }

}
