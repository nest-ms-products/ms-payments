import { Injectable } from '@nestjs/common';
import { Request, Response } from 'express';
import Stripe from 'stripe';
import { envs } from '../config/envs';
import { PaymentSessionDto } from './dto/payment-session.dto';

@Injectable()
export class PaymentsService {
  private readonly stripe = new Stripe(envs.stripeSecretKey);

  async createPaymentSession(paymentSessionDto: PaymentSessionDto) {
    const { currency, items } = paymentSessionDto;
    const lineItems = items.map((item) => ({
      price_data: {
        currency,
        product_data: {
          name: item.name,
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }));
    const session = this.stripe.checkout.sessions.create({
      payment_intent_data: {
        metadata: {},
      },
      line_items: lineItems,
      mode: 'payment',
      success_url: 'http://localhost:4003/payments/success',
      cancel_url: 'http://localhost:4003/payments/cancel',
    });

    return session;
  }

  async stripeWebhook(req: Request, res: Response) {
    const sig = req.headers['stripe-signature'];
    console.log({ sig });
    return {
      sig,
    };
  }
}
