import { Test, TestingModule } from '@nestjs/testing';
import { GetVehicleInfoController } from './get-vehicle-info.controller';

describe('GetVehicleInfoController', () => {
  let controller: GetVehicleInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetVehicleInfoController],
    }).compile();

    controller = module.get<GetVehicleInfoController>(GetVehicleInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
