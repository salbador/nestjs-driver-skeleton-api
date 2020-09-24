import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query, BadGatewayException  } from '@nestjs/common';
import CreateCheckCompartmentPositionsDTO from './dtos/checkcompartmentpositions.dto';

import { CheckCompartmentPositionsService } from './checkcompartmentpositions.service';


@Controller('checkcompartmentpositions')
export class CheckCompartmentPositionsController {
  constructor(private checkcompartmentpositionsService: CheckCompartmentPositionsService) {  }

  @Post('/')
  async createPost(@Res() res, @Body() createCheckCompartmentPositionsDTO: CreateCheckCompartmentPositionsDTO)  {
    const checkcompartmentpositions = await this.checkcompartmentpositionsService.createCheckCompartmentPositions(createCheckCompartmentPositionsDTO);
    return res.status(HttpStatus.CREATED).json({
      checkcompartmentpositions: checkcompartmentpositions
    })
  }

}
