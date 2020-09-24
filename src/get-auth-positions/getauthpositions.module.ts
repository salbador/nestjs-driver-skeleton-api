import { Module } from '@nestjs/common';
import { GetAuthPositionsController } from './getauthpositions.controller';
import { GetAuthPositionsService } from './getauthpositions.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GetAuthPositionsSchema } from './schemas/getauthpositions.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'GetAuthPositions', schema: GetAuthPositionsSchema}
    ])
  ],
  controllers: [GetAuthPositionsController],
  providers: [GetAuthPositionsService]
})
export class GetAuthPositionsModule {}
