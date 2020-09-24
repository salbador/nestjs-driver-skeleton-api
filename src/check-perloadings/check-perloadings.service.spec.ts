import { Test, TestingModule } from '@nestjs/testing';
import { CheckPerloadingsService } from './check-perloadings.service';

describe('CheckPerloadingsService', () => {
  let service: CheckPerloadingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CheckPerloadingsService],
    }).compile();

    service = module.get<CheckPerloadingsService>(CheckPerloadingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
