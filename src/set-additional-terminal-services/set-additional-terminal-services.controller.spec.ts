import { Test, TestingModule } from '@nestjs/testing';
import { SetAdditionalTerminalServicesController } from './set-additional-terminal-services.controller';

describe('SetAdditionalTerminalServicesController', () => {
  let controller: SetAdditionalTerminalServicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SetAdditionalTerminalServicesController],
    }).compile();

    controller = module.get<SetAdditionalTerminalServicesController>(SetAdditionalTerminalServicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
