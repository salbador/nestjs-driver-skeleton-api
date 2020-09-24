import { Test, TestingModule } from '@nestjs/testing';
import { GetAdditionalInfoTermplatesController } from './get-additional-info-termplates.controller';

describe('GetAdditionalInfoTermplatesController', () => {
  let controller: GetAdditionalInfoTermplatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetAdditionalInfoTermplatesController],
    }).compile();

    controller = module.get<GetAdditionalInfoTermplatesController>(GetAdditionalInfoTermplatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
