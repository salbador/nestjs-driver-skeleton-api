import { Test, TestingModule } from '@nestjs/testing';
import { CheckDriverService } from './check-driver.service';

describe('CheckDriverService', () => {
  let service: CheckDriverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CheckDriverService],
    }).compile();

    service = module.get<CheckDriverService>(CheckDriverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
