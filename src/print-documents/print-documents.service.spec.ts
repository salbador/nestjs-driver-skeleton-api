import { Test, TestingModule } from '@nestjs/testing';
import { PrintDocumentsService } from './print-documents.service';

describe('PrintDocumentsService', () => {
  let service: PrintDocumentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrintDocumentsService],
    }).compile();

    service = module.get<PrintDocumentsService>(PrintDocumentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
