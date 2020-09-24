import { Test, TestingModule } from '@nestjs/testing';
import { CheckDriverLoadingAdrService } from './check-driver-loading-adr.service';

describe('CheckDriverLoadingAdrService', () => {
  let service: CheckDriverLoadingAdrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CheckDriverLoadingAdrService],
    }).compile();

    service = module.get<CheckDriverLoadingAdrService>(CheckDriverLoadingAdrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
