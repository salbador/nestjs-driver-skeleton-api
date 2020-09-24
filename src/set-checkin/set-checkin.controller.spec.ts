import { Test, TestingModule } from '@nestjs/testing';
import { SetCheckinController } from './set-checkin.controller';

describe('SetCheckinController', () => {
  let controller: SetCheckinController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SetCheckinController],
    }).compile();

    controller = module.get<SetCheckinController>(SetCheckinController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
