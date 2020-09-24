import { Test, TestingModule } from '@nestjs/testing';
import { CheckDriverController } from './check-driver.controller';

describe('CheckDriverController', () => {
  let controller: CheckDriverController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CheckDriverController],
    }).compile();

    controller = module.get<CheckDriverController>(CheckDriverController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
