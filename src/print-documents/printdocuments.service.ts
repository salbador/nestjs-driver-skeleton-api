import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PrintDocuments } from './interfaces/printdocuments.interface';
import CreatePrintDocumentsDTO from './dtos/printdocuments.dto'


@Injectable()
export class PrintDocumentsService {
  constructor(@InjectModel('PrintDocuments') private readonly printdocumentsModel: Model<PrintDocuments>) {  }

  async createPrintDocuments(createPrintDocumentsDTO: CreatePrintDocumentsDTO): Promise<PrintDocuments>{
    const printdocuments = new this.printdocumentsModel(createPrintDocumentsDTO);
    return await printdocuments.save();
  }
}
