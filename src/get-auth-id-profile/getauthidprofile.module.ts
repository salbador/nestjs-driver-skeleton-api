import { Module } from '@nestjs/common';
import { GetAuthIdProfileController } from './getauthidprofile.controller';
import { GetAuthIdProfileService } from './getauthidprofile.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GetAuthIdProfileSchema } from './schemas/getauthidprofile.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'GetAuthIdProfile', schema: GetAuthIdProfileSchema}
    ])
  ],
  controllers: [GetAuthIdProfileController],
  providers: [GetAuthIdProfileService]
})
export class GetAuthIdProfileModule {}
