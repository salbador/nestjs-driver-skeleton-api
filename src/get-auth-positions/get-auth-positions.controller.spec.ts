import { Test, TestingModule } from '@nestjs/testing';
import { GetAuthPositionsController } from './get-auth-positions.controller';

describe('GetAuthPositionsController', () => {
  let controller: GetAuthPositionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetAuthPositionsController],
    }).compile();

    controller = module.get<GetAuthPositionsController>(GetAuthPositionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
