import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [myStocks, setMyStocks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then(r => r.json())
    .then(data => setStocks(data))
  }, [])

  const handleAddStock = (stockToAdd) => {
    setMyStocks(currentMyStocks => [...currentMyStocks, stockToAdd])
  }

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} handleAddStock={handleAddStock}/>
        </div>
        <div className="col-4">
          <PortfolioContainer myStocks={myStocks} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
