import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Templetus } from './interfaces/templetus.interface';
import CreateTempletusDTO from './dtos/templetus.dto'


@Injectable()
export class TempletusService {
  constructor(@InjectModel('Templetus') private readonly templetusModel: Model<Templetus>) {  }

  async createTempletus(createTempletusDTO: CreateTempletusDTO): Promise<Templetus>{
    const templetus = new this.templetusModel(createTempletusDTO);
    return await templetus.save();
  }
}
