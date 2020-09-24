import { Module } from '@nestjs/common';
import { CheckDriverController } from './checkdriver.controller';
import { CheckDriverService } from './checkdriver.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CheckDriverSchema } from './schemas/checkdriver.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'CheckDriver', schema: CheckDriverSchema}
    ])
  ],
  controllers: [CheckDriverController],
  providers: [CheckDriverService]
})
export class CheckDriverModule {}
