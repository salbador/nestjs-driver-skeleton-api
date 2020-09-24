import { Test, TestingModule } from '@nestjs/testing';
import { CheckPreloadingsService } from './check-preloadings.service';

describe('CheckPreloadingsService', () => {
  let service: CheckPreloadingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CheckPreloadingsService],
    }).compile();

    service = module.get<CheckPreloadingsService>(CheckPreloadingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
