import { Test, TestingModule } from '@nestjs/testing';
import { CheckVehiclesController } from './check-vehicles.controller';

describe('CheckVehiclesController', () => {
  let controller: CheckVehiclesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CheckVehiclesController],
    }).compile();

    controller = module.get<CheckVehiclesController>(CheckVehiclesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
