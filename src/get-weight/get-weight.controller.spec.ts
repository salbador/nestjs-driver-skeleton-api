import { Test, TestingModule } from '@nestjs/testing';
import { GetWeightController } from './get-weight.controller';

describe('GetWeightController', () => {
  let controller: GetWeightController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetWeightController],
    }).compile();

    controller = module.get<GetWeightController>(GetWeightController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
