import { useMemo } from "react";
import { useCryptoStore } from "../store";
import Spinner from "./Spinner";

const CryptoPriceDisplay = () => {
  const result = useCryptoStore((state) => state.result);
  const loading = useCryptoStore((state) => state.loading);
  const hasResult = useMemo(() => Object.keys(result).length > 0, [result]);

  return (
    <div className="result-container">
      {loading ? (
        <Spinner />
      ) : (
        hasResult && (
          <>
            <h2>Cotización</h2>
            <div className="result-info">
              <img
                src={`https://www.cryptocompare.com${result.IMAGEURL}`}
                alt="Imagen Criptomoneda"
              />

              <div>
                <p>
                  El precio es : <span>{result.PRICE}</span>
                </p>
                <p>
                  El precio mas bajo del dia : <span>{result.LOWDAY}</span>
                </p>
                <p>
                  El precio mas alto del dia : <span>{result.HIGHDAY}</span>
                </p>
                <p>
                  Variación últimas 24 horas :{" "}
                  <span>{result.CHANGEPCT24HOUR}</span>
                </p>
                <p>
                  Última Actualización :{" "}
                  <span>
                    {result.LASTUPDATE === "Just now"
                      ? "Ahora mismo"
                      : result.LASTUPDATE}
                  </span>
                </p>
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
};

export default CryptoPriceDisplay;
