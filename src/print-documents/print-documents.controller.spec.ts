import { Test, TestingModule } from '@nestjs/testing';
import { PrintDocumentsController } from './print-documents.controller';

describe('PrintDocumentsController', () => {
  let controller: PrintDocumentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrintDocumentsController],
    }).compile();

    controller = module.get<PrintDocumentsController>(PrintDocumentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
