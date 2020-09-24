import { Test, TestingModule } from '@nestjs/testing';
import { SetCheckinStatusService } from './set-checkin-status.service';

describe('SetCheckinStatusService', () => {
  let service: SetCheckinStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SetCheckinStatusService],
    }).compile();

    service = module.get<SetCheckinStatusService>(SetCheckinStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
