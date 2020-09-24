import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query, BadGatewayException  } from '@nestjs/common';
import CreateRecalculateCompartmentPositionsDTO from './dtos/recalculatecompartmentpositions.dto';

import { RecalculateCompartmentPositionsService } from './recalculatecompartmentpositions.service';


@Controller('recalculatecompartmentpositions')
export class RecalculateCompartmentPositionsController {
  constructor(private recalculatecompartmentpositionsService: RecalculateCompartmentPositionsService) {  }

  @Post('/')
  async createPost(@Res() res, @Body() createRecalculateCompartmentPositionsDTO: CreateRecalculateCompartmentPositionsDTO)  {
    const recalculatecompartmentpositions = await this.recalculatecompartmentpositionsService.createRecalculateCompartmentPositions(createRecalculateCompartmentPositionsDTO);
    return res.status(HttpStatus.CREATED).json({
      recalculatecompartmentpositions: recalculatecompartmentpositions
    })
  }

}
