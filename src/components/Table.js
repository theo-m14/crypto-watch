import { useState } from "react";

const Table = ({ coinsData }) => {
  const [rangeNumber, setRangeNumber] = useState(100);

  const tableHeader = [
    "Prix",
    "MarketCap",
    "Volume",
    "1h",
    "1j",
    "1m",
    "1a",
    "ATH",
  ];

  const [orderBy, setOrderBy] = useState("");

  return (
    <div className="table-container">
      <div className="table-header">
        <div className="range-container">
          <span>
            Top{"  "}
            <input
              type="text"
              value={rangeNumber}
              onChange={(e) => setRangeNumber(e.target.value)}
            />
          </span>
          <input
            type="range"
            max="250"
            min="1"
            value={rangeNumber}
            onChange={(e) => setRangeNumber(e.target.value)}
          />
        </div>
        {tableHeader.map((element) => (
          <li key={element}>
            <input
              type="radio"
              name="header-element"
              id={element}
              defaultChecked={
                element == orderBy || element == orderBy + "reverse"
                  ? true
                  : false
              }
              onClick={() => {
                if (orderBy == element) {
                  setOrderBy(element + "reverse");
                } else {
                  setOrderBy(element);
                }
              }}
            />
            <label htmlFor={element}>{element}</label>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Table;
