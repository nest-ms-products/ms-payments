import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { envs } from '../config/envs';

@Injectable()
export class PaymnetsService {
  private readonly stripe = new Stripe(envs.stripeSecretKey);
}
