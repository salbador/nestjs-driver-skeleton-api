import { Test, TestingModule } from '@nestjs/testing';
import { CheckVehicleLoadingAdrService } from './check-vehicle-loading-adr.service';

describe('CheckVehicleLoadingAdrService', () => {
  let service: CheckVehicleLoadingAdrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CheckVehicleLoadingAdrService],
    }).compile();

    service = module.get<CheckVehicleLoadingAdrService>(CheckVehicleLoadingAdrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
