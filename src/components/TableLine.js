import React, { useState } from "react";
import CoinChart from "./CoinChart";
import PercentChange from "./PercentChange";
import StarIcon from "./StarIcon";

const TableLine = ({ coin, index }) => {
  const [showChart, setShowChart] = useState(false);

  const priceFormater = (number) => {
    if (Math.round(number).toString().length < 4) {
      return new Intl.NumberFormat("us-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 7,
      }).format(number);
    }
    return number;
  };

  const mktCapFormater = (number) => {
    return (number / 1000000).toFixed(0);
  };

  return (
    <div className="table-line">
      <div className="infos-container">
        <StarIcon coinId={coin.id} />
        <p>{index + 1}</p>
        <div className="img">
          <img src={coin.image} alt={"logo" + coin.symbol} height="20" />
        </div>
        <div className="infos">
          <div
            className="chart-img"
            onMouseEnter={() => setShowChart(true)}
            onMouseLeave={() => setShowChart(false)}
          >
            <div className="chart-container" id={coin.name}>
              {showChart && <CoinChart coinId={coin.id} coinName={coin.name} />}
            </div>
            <img src="/assets/chart-icon.svg" alt={"chart" + coin.symbol} />
          </div>
          <h4>{coin.name}</h4>
          <span>- {coin.symbol.toUpperCase()}</span>
          <a
            href={`https://www.coingecko.com/fr/pi%C3%A8ces/${coin.name
              .toLowerCase()
              .replace(" ", "-")
              .replace(" ", "-")
              .replace(" ", "-")}`}
            target="_blank"
          >
            <img src="/assets/info-icon.svg" alt="info icon" />
          </a>
        </div>
      </div>
      <p>{priceFormater(coin.current_price).toLocaleString() + " $"}</p>
      <p className="mkt-cap">
        {mktCapFormater(coin.market_cap).toLocaleString() + " M$"}
      </p>
      <p className="volume">{coin.total_volume.toLocaleString() + "$"}</p>
      <PercentChange percentage={coin.price_change_percentage_1h_in_currency} />
      <PercentChange
        percentage={coin.price_change_percentage_24h_in_currency}
      />
      <PercentChange percentage={coin.price_change_percentage_7d_in_currency} />
      <PercentChange
        percentage={coin.price_change_percentage_30d_in_currency}
      />
      <PercentChange percentage={coin.price_change_percentage_1y_in_currency} />
      {coin.ath_change_percentage > -3 ? (
        <p>ATH !</p>
      ) : (
        <PercentChange percentage={coin.ath_change_percentage} />
      )}
    </div>
  );
};

export default TableLine;
