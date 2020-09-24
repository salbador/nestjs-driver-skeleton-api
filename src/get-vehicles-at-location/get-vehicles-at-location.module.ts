import { Module } from '@nestjs/common';
import { GetVehiclesAtLocationController } from './get-vehicles-at-location.controller';
import { GetVehiclesAtLocationService } from './get-vehicles-at-location.service';

@Module({
  controllers: [GetVehiclesAtLocationController],
  providers: [GetVehiclesAtLocationService]
})
export class GetVehiclesAtLocationModule {}
