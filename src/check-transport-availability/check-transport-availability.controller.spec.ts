import { Test, TestingModule } from '@nestjs/testing';
import { CheckTransportAvailabilityController } from './check-transport-availability.controller';

describe('CheckTransportAvailabilityController', () => {
  let controller: CheckTransportAvailabilityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CheckTransportAvailabilityController],
    }).compile();

    controller = module.get<CheckTransportAvailabilityController>(CheckTransportAvailabilityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
