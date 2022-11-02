import React from "react";

import "./itemdetail.css";

function CardDetail({ producto }) {
  return (
    <div className="detail-container">
      
        <div className="main container">
          <h1>{producto.title}</h1>
          <img src={producto.img} alt={producto.title} />
          <h3>$ {producto.price}</h3>
        </div>
        
      
    </div>
  );
}

export default CardDetail;