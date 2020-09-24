import { Test, TestingModule } from '@nestjs/testing';
import { SetAdditionalTerminalServicesService } from './set-additional-terminal-services.service';

describe('SetAdditionalTerminalServicesService', () => {
  let service: SetAdditionalTerminalServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SetAdditionalTerminalServicesService],
    }).compile();

    service = module.get<SetAdditionalTerminalServicesService>(SetAdditionalTerminalServicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
