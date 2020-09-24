import { Module } from '@nestjs/common';
import { GetAdditionalInfoTermplatesController } from './getadditionalinfotermplates.controller';
import { GetAdditionalInfoTermplatesService } from './getadditionalinfotermplates.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GetAdditionalInfoTermplatesSchema } from './schemas/getadditionalinfotermplates.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'GetAdditionalInfoTermplates', schema: GetAdditionalInfoTermplatesSchema}
    ])
  ],
  controllers: [GetAdditionalInfoTermplatesController],
  providers: [GetAdditionalInfoTermplatesService]
})
export class GetAdditionalInfoTermplatesModule {}
