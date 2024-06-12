import 'dotenv/config';
import * as joi from 'joi';
interface EnVars {
  PORT: number;
  STRIPE_SECRET_KEY: string;
  STRIPE_ENDPOINT_SECRET: string;
  STRIPE_SUCCESS_URL: string;
  STRIPE_CANCEL_URL: string;
}

const envSchema = joi
  .object({
    PORT: joi.number().required(),
    STRIPE_SECRET_KEY: joi.string().required(),
    STRIPE_ENDPOINT_SECRET: joi.string().required(),
    STRIPE_SUCCESS_URL: joi.string().required(),
    STRIPE_CANCEL_URL: joi.string().required(),
  })
  .unknown(true);

const { error, value } = envSchema.validate(process.env);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const enVars: EnVars = value;

export const envs = {
  port: enVars.PORT,
  stripeSecretKey: enVars.STRIPE_SECRET_KEY,
  stripeEndpointSecret: enVars.STRIPE_ENDPOINT_SECRET,
  stripeSuccessUrl: enVars.STRIPE_SUCCESS_URL,
  stripeCancelUrl: enVars.STRIPE_CANCEL_URL,
};
