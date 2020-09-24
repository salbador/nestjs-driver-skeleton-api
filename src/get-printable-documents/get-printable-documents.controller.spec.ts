import { Test, TestingModule } from '@nestjs/testing';
import { GetPrintableDocumentsController } from './get-printable-documents.controller';

describe('GetPrintableDocumentsController', () => {
  let controller: GetPrintableDocumentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetPrintableDocumentsController],
    }).compile();

    controller = module.get<GetPrintableDocumentsController>(GetPrintableDocumentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
