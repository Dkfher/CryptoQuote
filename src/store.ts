import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Cryptocurrency, CryptoPrice, GeneralState } from "./types";
import { fetchCurrentCryptoPrice, getCryptos } from "./services/CryptoService";

type CryptoStore = {
  cryptocurrencies: Cryptocurrency[];
  result: CryptoPrice;
  loading: boolean;
  fetchCryptos: () => Promise<void>;
  fetchData: (generalState: GeneralState) => Promise<void>;
};

export const useCryptoStore = create<CryptoStore>()(
  devtools((set) => ({
    cryptocurrencies: [],
    result: {} as CryptoPrice,
    loading: false,
    fetchCryptos: async () => {
      const cryptocurrencies = await getCryptos();
      set(() => ({
        cryptocurrencies,
      }));
    },
    fetchData: async (generalState) => {
      set(() => ({
        loading: true,
      }));

      const result = await fetchCurrentCryptoPrice(generalState);
      set(() => ({
        result,
        loading: false,
      }));
    },
  }))
);
