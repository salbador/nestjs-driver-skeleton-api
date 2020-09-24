import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query, BadGatewayException  } from '@nestjs/common';
import CreateCheckDriverLoadingAdrDTO from './dtos/checkdriverloadingadr.dto';

import { CheckDriverLoadingAdrService } from './checkdriverloadingadr.service';


@Controller('checkdriverloadingadr')
export class CheckDriverLoadingAdrController {
  constructor(private checkdriverloadingadrService: CheckDriverLoadingAdrService) {  }

  @Post('/')
  async createPost(@Res() res, @Body() createCheckDriverLoadingAdrDTO: CreateCheckDriverLoadingAdrDTO)  {
    const checkdriverloadingadr = await this.checkdriverloadingadrService.createCheckDriverLoadingAdr(createCheckDriverLoadingAdrDTO);
    return res.status(HttpStatus.CREATED).json({
      checkdriverloadingadr: checkdriverloadingadr
    })
  }

}
