import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query, BadGatewayException  } from '@nestjs/common';
import CreateGetAdditionalInfoTermplatesDTO from './dtos/getadditionalinfotermplates.dto';

import { GetAdditionalInfoTermplatesService } from './getadditionalinfotermplates.service';


@Controller('getadditionalinfotermplates')
export class GetAdditionalInfoTermplatesController {
  constructor(private getadditionalinfotermplatesService: GetAdditionalInfoTermplatesService) {  }

  @Post('/')
  async createPost(@Res() res, @Body() createGetAdditionalInfoTermplatesDTO: CreateGetAdditionalInfoTermplatesDTO)  {
    const getadditionalinfotermplates = await this.getadditionalinfotermplatesService.createGetAdditionalInfoTermplates(createGetAdditionalInfoTermplatesDTO);
    return res.status(HttpStatus.CREATED).json({
      getadditionalinfotermplates: getadditionalinfotermplates
    })
  }

}
