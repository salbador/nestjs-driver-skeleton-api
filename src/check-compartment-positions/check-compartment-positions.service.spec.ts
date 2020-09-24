import { Test, TestingModule } from '@nestjs/testing';
import { CheckCompartmentPositionsService } from './check-compartment-positions.service';

describe('CheckCompartmentPositionsService', () => {
  let service: CheckCompartmentPositionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CheckCompartmentPositionsService],
    }).compile();

    service = module.get<CheckCompartmentPositionsService>(CheckCompartmentPositionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
