import { Module } from '@nestjs/common';
import { GetCheckinHeadersController } from './getcheckinheaders.controller';
import { GetCheckinHeadersService } from './getcheckinheaders.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GetCheckinHeadersSchema } from './schemas/getcheckinheaders.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'GetCheckinHeaders', schema: GetCheckinHeadersSchema}
    ])
  ],
  controllers: [GetCheckinHeadersController],
  providers: [GetCheckinHeadersService]
})
export class GetCheckinHeadersModule {}
