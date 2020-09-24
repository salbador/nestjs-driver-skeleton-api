import { Test, TestingModule } from '@nestjs/testing';
import { GetCheckinHeadersService } from './get-checkin-headers.service';

describe('GetCheckinHeadersService', () => {
  let service: GetCheckinHeadersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetCheckinHeadersService],
    }).compile();

    service = module.get<GetCheckinHeadersService>(GetCheckinHeadersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
