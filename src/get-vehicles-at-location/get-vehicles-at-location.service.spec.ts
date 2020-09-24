import { Test, TestingModule } from '@nestjs/testing';
import { GetVehiclesAtLocationService } from './get-vehicles-at-location.service';

describe('GetVehiclesAtLocationService', () => {
  let service: GetVehiclesAtLocationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetVehiclesAtLocationService],
    }).compile();

    service = module.get<GetVehiclesAtLocationService>(GetVehiclesAtLocationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
