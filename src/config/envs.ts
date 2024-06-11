import 'dotenv/config';
import * as joi from 'joi';
interface EnVars {
  PORT: number;
  STRIPE_SECRET_KEY: string;
}

const envSchema = joi
  .object({
    PORT: joi.number().required(),
    STRIPE_SECRET_KEY: joi.string().required(),
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
};
