import { Module } from '@nestjs/common';
import { CheckVehiclesController } from './checkvehicles.controller';
import { CheckVehiclesService } from './checkvehicles.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CheckVehiclesSchema } from './schemas/checkvehicles.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'CheckVehicles', schema: CheckVehiclesSchema}
    ])
  ],
  controllers: [CheckVehiclesController],
  providers: [CheckVehiclesService]
})
export class CheckVehiclesModule {}
