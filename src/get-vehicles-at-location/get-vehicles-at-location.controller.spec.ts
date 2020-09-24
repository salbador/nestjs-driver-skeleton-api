import { Test, TestingModule } from '@nestjs/testing';
import { GetVehiclesAtLocationController } from './get-vehicles-at-location.controller';

describe('GetVehiclesAtLocationController', () => {
  let controller: GetVehiclesAtLocationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetVehiclesAtLocationController],
    }).compile();

    controller = module.get<GetVehiclesAtLocationController>(GetVehiclesAtLocationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
