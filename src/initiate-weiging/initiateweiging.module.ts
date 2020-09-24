import { Module } from '@nestjs/common';
import { InitiateWeigingController } from './initiateweiging.controller';
import { InitiateWeigingService } from './initiateweiging.service';
import { MongooseModule } from '@nestjs/mongoose';
import { InitiateWeigingSchema } from './schemas/initiateweiging.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'InitiateWeiging', schema: InitiateWeigingSchema}
    ])
  ],
  controllers: [InitiateWeigingController],
  providers: [InitiateWeigingService]
})
export class InitiateWeigingModule {}
