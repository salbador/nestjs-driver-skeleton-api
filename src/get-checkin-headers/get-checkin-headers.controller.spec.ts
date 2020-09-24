import { Test, TestingModule } from '@nestjs/testing';
import { GetCheckinHeadersController } from './get-checkin-headers.controller';

describe('GetCheckinHeadersController', () => {
  let controller: GetCheckinHeadersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetCheckinHeadersController],
    }).compile();

    controller = module.get<GetCheckinHeadersController>(GetCheckinHeadersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
