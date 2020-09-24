import { Test, TestingModule } from '@nestjs/testing';
import { GetAuthIdProfileService } from './get-auth-id-profile.service';

describe('GetAuthIdProfileService', () => {
  let service: GetAuthIdProfileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetAuthIdProfileService],
    }).compile();

    service = module.get<GetAuthIdProfileService>(GetAuthIdProfileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
