import { Test, TestingModule } from '@nestjs/testing';
import { InitiateWeigingController } from './initiate-weiging.controller';

describe('InitiateWeigingController', () => {
  let controller: InitiateWeigingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InitiateWeigingController],
    }).compile();

    controller = module.get<InitiateWeigingController>(InitiateWeigingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
