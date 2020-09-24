import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query, BadGatewayException  } from '@nestjs/common';
import CreateSetCheckinStatusDTO from './dtos/setcheckinstatus.dto';

import { SetCheckinStatusService } from './setcheckinstatus.service';


@Controller('setcheckinstatus')
export class SetCheckinStatusController {
  constructor(private setcheckinstatusService: SetCheckinStatusService) {  }

  @Post('/')
  async createPost(@Res() res, @Body() createSetCheckinStatusDTO: CreateSetCheckinStatusDTO)  {
    const setcheckinstatus = await this.setcheckinstatusService.createSetCheckinStatus(createSetCheckinStatusDTO);
    return res.status(HttpStatus.CREATED).json({
      setcheckinstatus: setcheckinstatus
    })
  }

}
