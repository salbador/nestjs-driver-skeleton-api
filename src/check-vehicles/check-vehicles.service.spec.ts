import { Test, TestingModule } from '@nestjs/testing';
import { CheckVehiclesService } from './check-vehicles.service';

describe('CheckVehiclesService', () => {
  let service: CheckVehiclesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CheckVehiclesService],
    }).compile();

    service = module.get<CheckVehiclesService>(CheckVehiclesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
