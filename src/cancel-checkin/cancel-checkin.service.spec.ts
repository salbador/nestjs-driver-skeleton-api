import { Test, TestingModule } from '@nestjs/testing';
import { CancelCheckinService } from './cancel-checkin.service';

describe('CancelCheckinService', () => {
  let service: CancelCheckinService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CancelCheckinService],
    }).compile();

    service = module.get<CancelCheckinService>(CancelCheckinService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
