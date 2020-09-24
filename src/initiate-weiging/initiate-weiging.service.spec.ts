import { Test, TestingModule } from '@nestjs/testing';
import { InitiateWeigingService } from './initiate-weiging.service';

describe('InitiateWeigingService', () => {
  let service: InitiateWeigingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InitiateWeigingService],
    }).compile();

    service = module.get<InitiateWeigingService>(InitiateWeigingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
