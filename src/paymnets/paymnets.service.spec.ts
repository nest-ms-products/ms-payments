import { Test, TestingModule } from '@nestjs/testing';
import { PaymnetsService } from './paymnets.service';

describe('PaymnetsService', () => {
  let service: PaymnetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymnetsService],
    }).compile();

    service = module.get<PaymnetsService>(PaymnetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
