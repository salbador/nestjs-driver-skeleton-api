import { Module } from '@nestjs/common';
import { CheckAdditionalInformationController } from './checkadditionalinformation.controller';
import { CheckAdditionalInformationService } from './checkadditionalinformation.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CheckAdditionalInformationSchema } from './schemas/checkadditionalinformation.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'CheckAdditionalInformation', schema: CheckAdditionalInformationSchema}
    ])
  ],
  controllers: [CheckAdditionalInformationController],
  providers: [CheckAdditionalInformationService]
})
export class CheckAdditionalInformationModule {}
