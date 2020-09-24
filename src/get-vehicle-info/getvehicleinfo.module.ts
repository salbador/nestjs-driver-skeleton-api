import { Module } from '@nestjs/common';
import { GetVehicleInfoController } from './getvehicleinfo.controller';
import { GetVehicleInfoService } from './getvehicleinfo.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GetVehicleInfoSchema } from './schemas/getvehicleinfo.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'GetVehicleInfo', schema: GetVehicleInfoSchema}
    ])
  ],
  controllers: [GetVehicleInfoController],
  providers: [GetVehicleInfoService]
})
export class GetVehicleInfoModule {}
