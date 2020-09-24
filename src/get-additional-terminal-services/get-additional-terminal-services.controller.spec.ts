import { Test, TestingModule } from '@nestjs/testing';
import { GetAdditionalTerminalServicesController } from './get-additional-terminal-services.controller';

describe('GetAdditionalTerminalServicesController', () => {
  let controller: GetAdditionalTerminalServicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetAdditionalTerminalServicesController],
    }).compile();

    controller = module.get<GetAdditionalTerminalServicesController>(GetAdditionalTerminalServicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
