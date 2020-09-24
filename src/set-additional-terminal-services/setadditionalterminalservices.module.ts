import { Module } from '@nestjs/common';
import { SetAdditionalTerminalServicesController } from './setadditionalterminalservices.controller';
import { SetAdditionalTerminalServicesService } from './setadditionalterminalservices.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SetAdditionalTerminalServicesSchema } from './schemas/setadditionalterminalservices.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'SetAdditionalTerminalServices', schema: SetAdditionalTerminalServicesSchema}
    ])
  ],
  controllers: [SetAdditionalTerminalServicesController],
  providers: [SetAdditionalTerminalServicesService]
})
export class SetAdditionalTerminalServicesModule {}
