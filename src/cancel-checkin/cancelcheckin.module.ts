import { Module } from '@nestjs/common';
import { CancelCheckinController } from './cancelcheckin.controller';
import { CancelCheckinService } from './cancelcheckin.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CancelCheckinSchema } from './schemas/cancelcheckin.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'CancelCheckin', schema: CancelCheckinSchema}
    ])
  ],
  controllers: [CancelCheckinController],
  providers: [CancelCheckinService]
})
export class CancelCheckinModule {}
