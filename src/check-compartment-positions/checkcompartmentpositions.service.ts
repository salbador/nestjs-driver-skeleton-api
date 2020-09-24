import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CheckCompartmentPositions } from './interfaces/checkcompartmentpositions.interface';
import CreateCheckCompartmentPositionsDTO from './dtos/checkcompartmentpositions.dto'


@Injectable()
export class CheckCompartmentPositionsService {
  constructor(@InjectModel('CheckCompartmentPositions') private readonly checkcompartmentpositionsModel: Model<CheckCompartmentPositions>) {  }

  async createCheckCompartmentPositions(createCheckCompartmentPositionsDTO: CreateCheckCompartmentPositionsDTO): Promise<CheckCompartmentPositions>{
    const checkcompartmentpositions = new this.checkcompartmentpositionsModel(createCheckCompartmentPositionsDTO);
    return await checkcompartmentpositions.save();
  }
}
