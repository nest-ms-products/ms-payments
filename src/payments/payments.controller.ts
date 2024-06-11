import { Controller, Get, Post } from '@nestjs/common';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('create-payment-session')
  createPaymentSession() {
    return this.paymentsService.createPaymentSession();
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
