import React, { useState, useEffect } from "react";
import { getUnCurso } from "../mockAPI/mockAPI";
import CardDetail from "./CardDetail";

// 6. Leer los parámetros de la URL
import { useParams } from "react-router-dom";

function ItemDetailContainer(props) {
  const [curso, setCurso] = useState({});

  const { id } = useParams();

  useEffect(() => {
    getUnCurso(id).then((data) => {
      setCurso(data);
    });
  }, [id]);

  return (
      <CardDetail curso={curso} />
  );
}

export default ItemDetailContainer;