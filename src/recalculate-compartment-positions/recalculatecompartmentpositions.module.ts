import { Module } from '@nestjs/common';
import { RecalculateCompartmentPositionsController } from './recalculatecompartmentpositions.controller';
import { RecalculateCompartmentPositionsService } from './recalculatecompartmentpositions.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RecalculateCompartmentPositionsSchema } from './schemas/recalculatecompartmentpositions.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'RecalculateCompartmentPositions', schema: RecalculateCompartmentPositionsSchema}
    ])
  ],
  controllers: [RecalculateCompartmentPositionsController],
  providers: [RecalculateCompartmentPositionsService]
})
export class RecalculateCompartmentPositionsModule {}
