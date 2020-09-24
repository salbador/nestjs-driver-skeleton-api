import { Test, TestingModule } from '@nestjs/testing';
import { CheckVehicleLoadingAdrController } from './check-vehicle-loading-adr.controller';

describe('CheckVehicleLoadingAdrController', () => {
  let controller: CheckVehicleLoadingAdrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CheckVehicleLoadingAdrController],
    }).compile();

    controller = module.get<CheckVehicleLoadingAdrController>(CheckVehicleLoadingAdrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
