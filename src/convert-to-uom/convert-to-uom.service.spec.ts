import { Test, TestingModule } from '@nestjs/testing';
import { ConvertToUomService } from './convert-to-uom.service';

describe('ConvertToUomService', () => {
  let service: ConvertToUomService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConvertToUomService],
    }).compile();

    service = module.get<ConvertToUomService>(ConvertToUomService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
