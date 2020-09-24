import { Test, TestingModule } from '@nestjs/testing';
import { GetUserDataByDriverPinService } from './get-user-data-by-driver-pin.service';

describe('GetUserDataByDriverPinService', () => {
  let service: GetUserDataByDriverPinService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetUserDataByDriverPinService],
    }).compile();

    service = module.get<GetUserDataByDriverPinService>(GetUserDataByDriverPinService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
