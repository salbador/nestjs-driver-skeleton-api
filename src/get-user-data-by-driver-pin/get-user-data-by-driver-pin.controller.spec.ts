import { Test, TestingModule } from '@nestjs/testing';
import { GetUserDataByDriverPinController } from './get-user-data-by-driver-pin.controller';

describe('GetUserDataByDriverPinController', () => {
  let controller: GetUserDataByDriverPinController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetUserDataByDriverPinController],
    }).compile();

    controller = module.get<GetUserDataByDriverPinController>(GetUserDataByDriverPinController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
