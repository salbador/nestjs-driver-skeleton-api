import { Test, TestingModule } from '@nestjs/testing';
import { ConvertToUomController } from './convert-to-uom.controller';

describe('ConvertToUomController', () => {
  let controller: ConvertToUomController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConvertToUomController],
    }).compile();

    controller = module.get<ConvertToUomController>(ConvertToUomController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
