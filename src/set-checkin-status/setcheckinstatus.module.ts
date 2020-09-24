import { Module } from '@nestjs/common';
import { SetCheckinStatusController } from './setcheckinstatus.controller';
import { SetCheckinStatusService } from './setcheckinstatus.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SetCheckinStatusSchema } from './schemas/setcheckinstatus.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'SetCheckinStatus', schema: SetCheckinStatusSchema}
    ])
  ],
  controllers: [SetCheckinStatusController],
  providers: [SetCheckinStatusService]
})
export class SetCheckinStatusModule {}
