import { Test, TestingModule } from '@nestjs/testing';
import { GetAdditionalInfoTermplatesService } from './get-additional-info-termplates.service';

describe('GetAdditionalInfoTermplatesService', () => {
  let service: GetAdditionalInfoTermplatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetAdditionalInfoTermplatesService],
    }).compile();

    service = module.get<GetAdditionalInfoTermplatesService>(GetAdditionalInfoTermplatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
