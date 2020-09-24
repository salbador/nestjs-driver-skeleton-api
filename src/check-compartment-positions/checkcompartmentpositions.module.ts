import { Module } from '@nestjs/common';
import { CheckCompartmentPositionsController } from './checkcompartmentpositions.controller';
import { CheckCompartmentPositionsService } from './checkcompartmentpositions.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CheckCompartmentPositionsSchema } from './schemas/checkcompartmentpositions.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'CheckCompartmentPositions', schema: CheckCompartmentPositionsSchema}
    ])
  ],
  controllers: [CheckCompartmentPositionsController],
  providers: [CheckCompartmentPositionsService]
})
export class CheckCompartmentPositionsModule {}
