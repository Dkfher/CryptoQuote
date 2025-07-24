import { z } from "zod";
import {
  CurrencySchema,
  CryptoCurrencyResponseSchema,
  GeneralStateSchema,
  CryptoPriceSchema,
} from "../schema/crypto-schema";

export type Currency = z.infer<typeof CurrencySchema>;
export type Cryptocurrency = z.infer<typeof CryptoCurrencyResponseSchema>;
export type GeneralState = z.infer<typeof GeneralStateSchema>;
export type CryptoPrice = z.infer<typeof CryptoPriceSchema>;
