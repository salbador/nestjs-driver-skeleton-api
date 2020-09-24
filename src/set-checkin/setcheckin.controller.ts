import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query, BadGatewayException  } from '@nestjs/common';
import CreateSetCheckinDTO from './dtos/setcheckin.dto';

import { SetCheckinService } from './setcheckin.service';


@Controller('setcheckin')
export class SetCheckinController {
  constructor(private setcheckinService: SetCheckinService) {  }

  @Post('/')
  async createPost(@Res() res, @Body() createSetCheckinDTO: CreateSetCheckinDTO)  {
    const setcheckin = await this.setcheckinService.createSetCheckin(createSetCheckinDTO);
    return res.status(HttpStatus.CREATED).json({
      setcheckin: setcheckin
    })
  }

}
