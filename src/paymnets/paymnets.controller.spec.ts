import { Test, TestingModule } from '@nestjs/testing';
import { PaymnetsController } from './paymnets.controller';
import { PaymnetsService } from './paymnets.service';

describe('PaymnetsController', () => {
  let controller: PaymnetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymnetsController],
      providers: [PaymnetsService],
    }).compile();

    controller = module.get<PaymnetsController>(PaymnetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
