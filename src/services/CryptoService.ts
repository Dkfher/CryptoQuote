import axios from "axios";
import {
  CryptoCurrenciesResponseSchema,
  CryptoPriceSchema,
} from "../schema/crypto-schema";
import { GeneralState } from "../types";

export async function getCryptos() {
  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
  const {
    data: { Data },
  } = await axios(url);
  const result = CryptoCurrenciesResponseSchema.safeParse(Data);
  if (result.success) {
    return result.data;
  }
}

export async function fetchCurrentCryptoPrice(generalState: GeneralState) {
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${generalState.criptocurrency}&tsyms=${generalState.currency}`;
  const {
    data: { DISPLAY },
  } = await axios(url);

  const result = CryptoPriceSchema.safeParse(
    DISPLAY[generalState.criptocurrency][generalState.currency]
  );
  if (result.success) {
    return result.data;
  }
}
