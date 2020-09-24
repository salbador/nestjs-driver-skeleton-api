import { Test, TestingModule } from '@nestjs/testing';
import { CheckAdditionalInformationController } from './check-additional-information.controller';

describe('CheckAdditionalInformationController', () => {
  let controller: CheckAdditionalInformationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CheckAdditionalInformationController],
    }).compile();

    controller = module.get<CheckAdditionalInformationController>(CheckAdditionalInformationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
