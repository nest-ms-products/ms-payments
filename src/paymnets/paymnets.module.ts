import { Module } from '@nestjs/common';
import { PaymnetsService } from './paymnets.service';
import { PaymnetsController } from './paymnets.controller';

@Module({
  controllers: [PaymnetsController],
  providers: [PaymnetsService],
})
export class PaymnetsModule {}
