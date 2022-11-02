import React, { useState, useEffect } from "react";
import { getUnProducto } from "../mockAPI/mockAPI";
import CardDetail from "./CardDetail";

// 6. Leer los parámetros de la URL
import { useParams } from "react-router-dom";

function ItemDetailContainer(props) {
  const [producto, setUnProducto] = useState({});

  const { id } = useParams();

  useEffect(() => {
    getUnProducto(id).then((data) => {
      setCurso(data);
    });
  }, [id]);

  return (
      <CardDetail producto={producto} />
  );
}

export default ItemDetailContainer;