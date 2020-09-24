import { Module } from '@nestjs/common';
import { GetUserDataByDriverPinController } from './get-user-data-by-driver-pin.controller';
import { GetUserDataByDriverPinService } from './get-user-data-by-driver-pin.service';

@Module({
  controllers: [GetUserDataByDriverPinController],
  providers: [GetUserDataByDriverPinService]
})
export class GetUserDataByDriverPinModule {}
