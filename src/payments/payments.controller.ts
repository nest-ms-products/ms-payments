import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Request, Response } from 'express';
import { PaymentSessionDto } from './dto/payment-session.dto';
import { PaymentsService } from './payments.service';
import { PaymentsMessages } from '../common/enums/messages-tcp.enum';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @MessagePattern(PaymentsMessages.CreasteSession)
  createPaymentSession(@Payload() paymentSessionDto: PaymentSessionDto) {
    return this.paymentsService.createPaymentSession(paymentSessionDto);
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
  webhook(@Req() req: Request, @Res() res: Response) {
    return this.paymentsService.stripeWebhook(req, res);
  }
}
