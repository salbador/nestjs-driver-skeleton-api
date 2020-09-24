import { Test, TestingModule } from '@nestjs/testing';
import { SetCheckinStatusController } from './set-checkin-status.controller';

describe('SetCheckinStatusController', () => {
  let controller: SetCheckinStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SetCheckinStatusController],
    }).compile();

    controller = module.get<SetCheckinStatusController>(SetCheckinStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
