import React from "react";
import Stock from "./Stock";

function StockContainer({ stockData }) {
  return (
    <div>
      <h2>Stocks</h2>
      {stockData.map((stock) => (
        <Stock key={stock.id} name={stock.name} price={stock.price}/>
      ))}
    </div>
  );
}

export default StockContainer;
