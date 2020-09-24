import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query, BadGatewayException  } from '@nestjs/common';
import CreatePrintDocumentsDTO from './dtos/printdocuments.dto';

import { PrintDocumentsService } from './printdocuments.service';


@Controller('printdocuments')
export class PrintDocumentsController {
  constructor(private printdocumentsService: PrintDocumentsService) {  }

  @Post('/')
  async createPost(@Res() res, @Body() createPrintDocumentsDTO: CreatePrintDocumentsDTO)  {
    const printdocuments = await this.printdocumentsService.createPrintDocuments(createPrintDocumentsDTO);
    return res.status(HttpStatus.CREATED).json({
      printdocuments: printdocuments
    })
  }

}
