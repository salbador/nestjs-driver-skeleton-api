import { Module } from '@nestjs/common';
import { CheckVehicleLoadingAdrController } from './checkvehicleloadingadr.controller';
import { CheckVehicleLoadingAdrService } from './checkvehicleloadingadr.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CheckVehicleLoadingAdrSchema } from './schemas/checkvehicleloadingadr.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'CheckVehicleLoadingAdr', schema: CheckVehicleLoadingAdrSchema}
    ])
  ],
  controllers: [CheckVehicleLoadingAdrController],
  providers: [CheckVehicleLoadingAdrService]
})
export class CheckVehicleLoadingAdrModule {}
