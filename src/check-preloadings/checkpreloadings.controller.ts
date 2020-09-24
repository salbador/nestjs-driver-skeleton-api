import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query, BadGatewayException  } from '@nestjs/common';
import CreateCheckPreloadingsDTO from './dtos/checkpreloadings.dto';

import { CheckPreloadingsService } from './checkpreloadings.service';


@Controller('checkpreloadings')
export class CheckPreloadingsController {
  constructor(private checkpreloadingsService: CheckPreloadingsService) {  }

  @Post('/')
  async createPost(@Res() res, @Body() createCheckPreloadingsDTO: CreateCheckPreloadingsDTO)  {
    const checkpreloadings = await this.checkpreloadingsService.createCheckPreloadings(createCheckPreloadingsDTO);
    return res.status(HttpStatus.CREATED).json({
      checkpreloadings: checkpreloadings
    })
  }

}
