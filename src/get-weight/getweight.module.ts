import { Module } from '@nestjs/common';
import { GetWeightController } from './getweight.controller';
import { GetWeightService } from './getweight.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GetWeightSchema } from './schemas/getweight.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'GetWeight', schema: GetWeightSchema}
    ])
  ],
  controllers: [GetWeightController],
  providers: [GetWeightService]
})
export class GetWeightModule {}
