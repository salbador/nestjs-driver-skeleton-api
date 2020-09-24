import { Test, TestingModule } from '@nestjs/testing';
import { CheckDriverLoadingAdrController } from './check-driver-loading-adr.controller';

describe('CheckDriverLoadingAdrController', () => {
  let controller: CheckDriverLoadingAdrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CheckDriverLoadingAdrController],
    }).compile();

    controller = module.get<CheckDriverLoadingAdrController>(CheckDriverLoadingAdrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
