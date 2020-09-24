import { Test, TestingModule } from '@nestjs/testing';
import { GetTerminalShiftsService } from './get-terminal-shifts.service';

describe('GetTerminalShiftsService', () => {
  let service: GetTerminalShiftsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetTerminalShiftsService],
    }).compile();

    service = module.get<GetTerminalShiftsService>(GetTerminalShiftsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
