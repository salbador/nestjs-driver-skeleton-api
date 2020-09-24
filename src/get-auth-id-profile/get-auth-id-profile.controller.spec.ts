import { Test, TestingModule } from '@nestjs/testing';
import { GetAuthIdProfileController } from './get-auth-id-profile.controller';

describe('GetAuthIdProfileController', () => {
  let controller: GetAuthIdProfileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetAuthIdProfileController],
    }).compile();

    controller = module.get<GetAuthIdProfileController>(GetAuthIdProfileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
