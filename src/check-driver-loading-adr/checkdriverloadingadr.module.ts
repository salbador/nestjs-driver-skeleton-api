import { Module } from '@nestjs/common';
import { CheckDriverLoadingAdrController } from './checkdriverloadingadr.controller';
import { CheckDriverLoadingAdrService } from './checkdriverloadingadr.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CheckDriverLoadingAdrSchema } from './schemas/checkdriverloadingadr.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'CheckDriverLoadingAdr', schema: CheckDriverLoadingAdrSchema}
    ])
  ],
  controllers: [CheckDriverLoadingAdrController],
  providers: [CheckDriverLoadingAdrService]
})
export class CheckDriverLoadingAdrModule {}
