import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query, BadGatewayException  } from '@nestjs/common';
import CreateTempletusDTO from './dtos/templetus.dto';

import { TempletusService } from './templetus.service';


@Controller('templetus')
export class TempletusController {
  constructor(private templetusService: TempletusService) {  }

  @Post('/')
  async createPost(@Res() res, @Body() createTempletusDTO: CreateTempletusDTO)  {
    const templetus = await this.templetusService.createTempletus(createTempletusDTO);
    return res.status(HttpStatus.CREATED).json({
      templetus: templetus
    })
  }

}
