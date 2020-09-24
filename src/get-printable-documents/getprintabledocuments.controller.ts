import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query, BadGatewayException  } from '@nestjs/common';
import CreateGetPrintableDocumentsDTO from './dtos/getprintabledocuments.dto';

import { GetPrintableDocumentsService } from './getprintabledocuments.service';


@Controller('getprintabledocuments')
export class GetPrintableDocumentsController {
  constructor(private getprintabledocumentsService: GetPrintableDocumentsService) {  }

  @Post('/')
  async createPost(@Res() res, @Body() createGetPrintableDocumentsDTO: CreateGetPrintableDocumentsDTO)  {
    const getprintabledocuments = await this.getprintabledocumentsService.createGetPrintableDocuments(createGetPrintableDocumentsDTO);
    return res.status(HttpStatus.CREATED).json({
      getprintabledocuments: getprintabledocuments
    })
  }

}
