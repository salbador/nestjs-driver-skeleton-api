import { Test, TestingModule } from '@nestjs/testing';
import { CheckPreloadingsController } from './check-preloadings.controller';

describe('CheckPreloadingsController', () => {
  let controller: CheckPreloadingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CheckPreloadingsController],
    }).compile();

    controller = module.get<CheckPreloadingsController>(CheckPreloadingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
