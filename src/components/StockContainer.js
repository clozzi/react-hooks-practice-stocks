import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, handleAddStock, sortBy }) {

  const displayStocks = stocks
                    .sort((stockOne, stockTwo) => {
                      if (sortBy === "Alphabetically") {
                        const nameA = stockOne.name.toUpperCase();
                        const nameB = stockTwo.name.toUpperCase();
                        if (nameA < nameB) {
                          return -1;
                        }
                        if (nameA > nameB) {
                          return 1;
                        }
                        return 0;
                      } else {
                        return 0;
                      }
                    })
                    .map(stock => <Stock key={stock.id} {...stock} handleStock={handleAddStock} />)


  return (
    <div>
      <h2>Stocks</h2>
      {displayStocks}
    </div>
  );
}

export default StockContainer;
