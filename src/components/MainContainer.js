import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [myStocks, setMyStocks] = useState([]);
  const [sortBy, setSortBy] = useState("")

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then(r => r.json())
    .then(data => setStocks(data))
  }, [])

  const handleAddStock = (stockToAdd) => {
    setMyStocks(currentMyStocks => [...currentMyStocks, stockToAdd])
  }

  const handleRemoveStock = (stockToRemove) => {
    setMyStocks(currentMyStocks => currentMyStocks.filter(stock => stock.id !== stockToRemove.id))
  }

  const handleToggleSort = (e) => {
    setSortBy(e.target.value)
  }

  return (
    <div>
      <SearchBar sortBy={sortBy} handleToggleSort={handleToggleSort}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} handleAddStock={handleAddStock} sortBy={sortBy} />
        </div>
        <div className="col-4">
          <PortfolioContainer myStocks={myStocks} handleRemoveStock={handleRemoveStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
