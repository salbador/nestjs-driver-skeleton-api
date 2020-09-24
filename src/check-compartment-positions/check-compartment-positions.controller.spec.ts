import { Test, TestingModule } from '@nestjs/testing';
import { CheckCompartmentPositionsController } from './check-compartment-positions.controller';

describe('CheckCompartmentPositionsController', () => {
  let controller: CheckCompartmentPositionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CheckCompartmentPositionsController],
    }).compile();

    controller = module.get<CheckCompartmentPositionsController>(CheckCompartmentPositionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
