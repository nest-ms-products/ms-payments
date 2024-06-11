import { Controller, Get, Post } from '@nestjs/common';
import { PaymnetsService } from './paymnets.service';

@Controller('paymnets')
export class PaymnetsController {
  constructor(private readonly paymnetsService: PaymnetsService) {}

  @Post('create-payment-session')
  createPaymentSession() {
    return 'create payment session';
  }

  @Get('success')
  success() {
    return 'payment success';
  }

  @Get('cancel')
  cancel() {
    return 'payment cancel';
  }

  @Post('webhook')
  webhook() {
    return 'webhook';
  }
}
