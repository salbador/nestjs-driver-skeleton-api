import { Test, TestingModule } from '@nestjs/testing';
import { GetWeightService } from './get-weight.service';

describe('GetWeightService', () => {
  let service: GetWeightService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetWeightService],
    }).compile();

    service = module.get<GetWeightService>(GetWeightService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
