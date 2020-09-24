import { Test, TestingModule } from '@nestjs/testing';
import { SetCheckinService } from './set-checkin.service';

describe('SetCheckinService', () => {
  let service: SetCheckinService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SetCheckinService],
    }).compile();

    service = module.get<SetCheckinService>(SetCheckinService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
