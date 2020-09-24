import { Module } from '@nestjs/common';
import { CheckPreloadingsController } from './checkpreloadings.controller';
import { CheckPreloadingsService } from './checkpreloadings.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CheckPreloadingsSchema } from './schemas/checkpreloadings.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'CheckPreloadings', schema: CheckPreloadingsSchema}
    ])
  ],
  controllers: [CheckPreloadingsController],
  providers: [CheckPreloadingsService]
})
export class CheckPreloadingsModule {}
