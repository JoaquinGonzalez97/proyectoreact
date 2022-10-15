import React from "react";

import "./itemdetail.css";

function CardDetail({ curso }) {
  return (
    <div className="detail-container">
      
        <div className="main container">
          <h1>{curso.title}</h1>
          <img src={curso.img} alt={curso.title} />
          <h3>$ {curso.price}</h3>
        </div>
        
      
    </div>
  );
}

export default CardDetail;