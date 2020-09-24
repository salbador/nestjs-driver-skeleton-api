import { Module } from '@nestjs/common';
import { ConvertToUomController } from './converttouom.controller';
import { ConvertToUomService } from './converttouom.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConvertToUomSchema } from './schemas/converttouom.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'ConvertToUom', schema: ConvertToUomSchema}
    ])
  ],
  controllers: [ConvertToUomController],
  providers: [ConvertToUomService]
})
export class ConvertToUomModule {}
