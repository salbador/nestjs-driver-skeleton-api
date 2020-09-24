import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { GetPrintableDocuments } from './interfaces/getprintabledocuments.interface';
import CreateGetPrintableDocumentsDTO from './dtos/getprintabledocuments.dto'


@Injectable()
export class GetPrintableDocumentsService {
  constructor(@InjectModel('GetPrintableDocuments') private readonly getprintabledocumentsModel: Model<GetPrintableDocuments>) {  }

  async createGetPrintableDocuments(createGetPrintableDocumentsDTO: CreateGetPrintableDocumentsDTO): Promise<GetPrintableDocuments>{
    const getprintabledocuments = new this.getprintabledocumentsModel(createGetPrintableDocumentsDTO);
    return await getprintabledocuments.save();
  }
}
