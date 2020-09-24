import { Test, TestingModule } from '@nestjs/testing';
import { GetVehicleInfoService } from './get-vehicle-info.service';

describe('GetVehicleInfoService', () => {
  let service: GetVehicleInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetVehicleInfoService],
    }).compile();

    service = module.get<GetVehicleInfoService>(GetVehicleInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
