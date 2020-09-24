import { Test, TestingModule } from '@nestjs/testing';
import { RecalculateCompartmentPositionsController } from './recalculate-compartment-positions.controller';

describe('RecalculateCompartmentPositionsController', () => {
  let controller: RecalculateCompartmentPositionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecalculateCompartmentPositionsController],
    }).compile();

    controller = module.get<RecalculateCompartmentPositionsController>(RecalculateCompartmentPositionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
