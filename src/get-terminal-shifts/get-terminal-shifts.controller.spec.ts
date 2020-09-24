import { Test, TestingModule } from '@nestjs/testing';
import { GetTerminalShiftsController } from './get-terminal-shifts.controller';

describe('GetTerminalShiftsController', () => {
  let controller: GetTerminalShiftsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetTerminalShiftsController],
    }).compile();

    controller = module.get<GetTerminalShiftsController>(GetTerminalShiftsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
