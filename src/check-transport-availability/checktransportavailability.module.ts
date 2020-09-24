import { Module } from '@nestjs/common';
import { CheckTransportAvailabilityController } from './checktransportavailability.controller';
import { CheckTransportAvailabilityService } from './checktransportavailability.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CheckTransportAvailabilitySchema } from './schemas/checktransportavailability.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'CheckTransportAvailability', schema: CheckTransportAvailabilitySchema}
    ])
  ],
  controllers: [CheckTransportAvailabilityController],
  providers: [CheckTransportAvailabilityService]
})
export class CheckTransportAvailabilityModule {}
