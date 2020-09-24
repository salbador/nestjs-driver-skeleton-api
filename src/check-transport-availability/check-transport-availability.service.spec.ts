import { Test, TestingModule } from '@nestjs/testing';
import { CheckTransportAvailabilityService } from './check-transport-availability.service';

describe('CheckTransportAvailabilityService', () => {
  let service: CheckTransportAvailabilityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CheckTransportAvailabilityService],
    }).compile();

    service = module.get<CheckTransportAvailabilityService>(CheckTransportAvailabilityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
