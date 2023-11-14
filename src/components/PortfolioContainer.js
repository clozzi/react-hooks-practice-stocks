import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ myStocks }) {
  const mappedMyStocks = myStocks.map(stock => <Stock key={stock.id} {...stock} />)

  return (
    <div>
      <h2>My Portfolio</h2>
      {mappedMyStocks}
    </div>
  );
}

export default PortfolioContainer;
