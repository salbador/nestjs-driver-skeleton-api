import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query, BadGatewayException  } from '@nestjs/common';
import CreateConvertToUomDTO from './dtos/converttouom.dto';

import { ConvertToUomService } from './converttouom.service';


@Controller('converttouom')
export class ConvertToUomController {
  constructor(private converttouomService: ConvertToUomService) {  }

  @Post('/')
  async createPost(@Res() res, @Body() createConvertToUomDTO: CreateConvertToUomDTO)  {
    const converttouom = await this.converttouomService.createConvertToUom(createConvertToUomDTO);
    return res.status(HttpStatus.CREATED).json({
      converttouom: converttouom
    })
  }

}
