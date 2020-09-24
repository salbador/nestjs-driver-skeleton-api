import { Test, TestingModule } from '@nestjs/testing';
import { CheckPerloadingsController } from './check-perloadings.controller';

describe('CheckPerloadingsController', () => {
  let controller: CheckPerloadingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CheckPerloadingsController],
    }).compile();

    controller = module.get<CheckPerloadingsController>(CheckPerloadingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
