import { Module } from '@nestjs/common';
import { GetCheckinController } from './getcheckin.controller';
import { GetCheckinService } from './getcheckin.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GetCheckinSchema } from './schemas/getcheckin.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'GetCheckin', schema: GetCheckinSchema}
    ])
  ],
  controllers: [GetCheckinController],
  providers: [GetCheckinService]
})
export class GetCheckinModule {}
