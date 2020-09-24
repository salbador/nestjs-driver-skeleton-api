import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query, BadGatewayException  } from '@nestjs/common';
import CreateGetTerminalShiftsDTO from './dtos/getterminalshifts.dto';

import { GetTerminalShiftsService } from './getterminalshifts.service';


@Controller('getterminalshifts')
export class GetTerminalShiftsController {
  constructor(private getterminalshiftsService: GetTerminalShiftsService) {  }

  @Post('/')
  async createPost(@Res() res, @Body() createGetTerminalShiftsDTO: CreateGetTerminalShiftsDTO)  {
    const getterminalshifts = await this.getterminalshiftsService.createGetTerminalShifts(createGetTerminalShiftsDTO);
    return res.status(HttpStatus.CREATED).json({
      getterminalshifts: getterminalshifts
    })
  }

}
