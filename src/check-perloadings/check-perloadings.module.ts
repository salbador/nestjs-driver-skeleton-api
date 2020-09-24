import { Module } from '@nestjs/common';
import { CheckPerloadingsController } from './check-perloadings.controller';
import { CheckPerloadingsService } from './check-perloadings.service';

@Module({
  controllers: [CheckPerloadingsController],
  providers: [CheckPerloadingsService]
})
export class CheckPerloadingsModule {}
