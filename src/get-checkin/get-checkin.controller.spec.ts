import { Test, TestingModule } from '@nestjs/testing';
import { GetCheckinController } from './get-checkin.controller';

describe('GetCheckinController', () => {
  let controller: GetCheckinController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetCheckinController],
    }).compile();

    controller = module.get<GetCheckinController>(GetCheckinController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
