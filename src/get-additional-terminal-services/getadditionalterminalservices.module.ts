import { Module } from '@nestjs/common';
import { GetAdditionalTerminalServicesController } from './getadditionalterminalservices.controller';
import { GetAdditionalTerminalServicesService } from './getadditionalterminalservices.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GetAdditionalTerminalServicesSchema } from './schemas/getadditionalterminalservices.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'GetAdditionalTerminalServices', schema: GetAdditionalTerminalServicesSchema}
    ])
  ],
  controllers: [GetAdditionalTerminalServicesController],
  providers: [GetAdditionalTerminalServicesService]
})
export class GetAdditionalTerminalServicesModule {}
