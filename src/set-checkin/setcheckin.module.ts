import { Module } from '@nestjs/common';
import { SetCheckinController } from './setcheckin.controller';
import { SetCheckinService } from './setcheckin.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SetCheckinSchema } from './schemas/setcheckin.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'SetCheckin', schema: SetCheckinSchema}
    ])
  ],
  controllers: [SetCheckinController],
  providers: [SetCheckinService]
})
export class SetCheckinModule {}
