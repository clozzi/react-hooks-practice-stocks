import React from "react";

function Stock({ id, name, ticker, price, type, handleStock }) {

  const handleClick = () => {

    handleStock({id, name, ticker, price, type})
  }

  return (
    <div>
      <div className="card" onClick={handleClick}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
