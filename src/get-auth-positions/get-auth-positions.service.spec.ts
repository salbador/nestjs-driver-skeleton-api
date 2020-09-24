import { Test, TestingModule } from '@nestjs/testing';
import { GetAuthPositionsService } from './get-auth-positions.service';

describe('GetAuthPositionsService', () => {
  let service: GetAuthPositionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetAuthPositionsService],
    }).compile();

    service = module.get<GetAuthPositionsService>(GetAuthPositionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
