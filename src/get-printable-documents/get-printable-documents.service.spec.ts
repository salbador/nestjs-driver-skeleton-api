import { Test, TestingModule } from '@nestjs/testing';
import { GetPrintableDocumentsService } from './get-printable-documents.service';

describe('GetPrintableDocumentsService', () => {
  let service: GetPrintableDocumentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetPrintableDocumentsService],
    }).compile();

    service = module.get<GetPrintableDocumentsService>(GetPrintableDocumentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
