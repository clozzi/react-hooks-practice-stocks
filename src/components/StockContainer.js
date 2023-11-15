import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, handleAddStock }) {
  const mappedStocks = stocks.map(stock => <Stock key={stock.id} {...stock} handleStock={handleAddStock} />)

  return (
    <div>
      <h2>Stocks</h2>
      {mappedStocks}
    </div>
  );
}

export default StockContainer;
