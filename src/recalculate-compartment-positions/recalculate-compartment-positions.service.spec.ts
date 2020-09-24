import { Test, TestingModule } from '@nestjs/testing';
import { RecalculateCompartmentPositionsService } from './recalculate-compartment-positions.service';

describe('RecalculateCompartmentPositionsService', () => {
  let service: RecalculateCompartmentPositionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecalculateCompartmentPositionsService],
    }).compile();

    service = module.get<RecalculateCompartmentPositionsService>(RecalculateCompartmentPositionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
