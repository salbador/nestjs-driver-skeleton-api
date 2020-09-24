import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { RecalculateCompartmentPositions } from './interfaces/recalculatecompartmentpositions.interface';
import CreateRecalculateCompartmentPositionsDTO from './dtos/recalculatecompartmentpositions.dto'


@Injectable()
export class RecalculateCompartmentPositionsService {
  constructor(@InjectModel('RecalculateCompartmentPositions') private readonly recalculatecompartmentpositionsModel: Model<RecalculateCompartmentPositions>) {  }

  async createRecalculateCompartmentPositions(createRecalculateCompartmentPositionsDTO: CreateRecalculateCompartmentPositionsDTO): Promise<RecalculateCompartmentPositions>{
    const recalculatecompartmentpositions = new this.recalculatecompartmentpositionsModel(createRecalculateCompartmentPositionsDTO);
    return await recalculatecompartmentpositions.save();
  }
}
