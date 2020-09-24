import { Test, TestingModule } from '@nestjs/testing';
import { GetCheckinService } from './get-checkin.service';

describe('GetCheckinService', () => {
  let service: GetCheckinService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetCheckinService],
    }).compile();

    service = module.get<GetCheckinService>(GetCheckinService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
