import { Test, TestingModule } from '@nestjs/testing';
import { CheckAdditionalInformationService } from './check-additional-information.service';

describe('CheckAdditionalInformationService', () => {
  let service: CheckAdditionalInformationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CheckAdditionalInformationService],
    }).compile();

    service = module.get<CheckAdditionalInformationService>(CheckAdditionalInformationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
