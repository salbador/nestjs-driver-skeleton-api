import { Test, TestingModule } from '@nestjs/testing';
import { CancelCheckinController } from './cancel-checkin.controller';

describe('CancelCheckinController', () => {
  let controller: CancelCheckinController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CancelCheckinController],
    }).compile();

    controller = module.get<CancelCheckinController>(CancelCheckinController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
