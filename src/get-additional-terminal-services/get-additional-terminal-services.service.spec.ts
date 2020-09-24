import { Test, TestingModule } from '@nestjs/testing';
import { GetAdditionalTerminalServicesService } from './get-additional-terminal-services.service';

describe('GetAdditionalTerminalServicesService', () => {
  let service: GetAdditionalTerminalServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetAdditionalTerminalServicesService],
    }).compile();

    service = module.get<GetAdditionalTerminalServicesService>(GetAdditionalTerminalServicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
