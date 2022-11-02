import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getProductos, getProductosByCategory } from "../mockAPI/mockAPI";
import ItemList from "./ItemList";
import {useParams} from "react-router-dom" 

 
//import "./ItemlistContainer.css";

function ItemListContainer(props) {
  const [productos, setUnProducto]= useState([])
  const  {categoryid} = useParams ()
  useEffect (()=>{
    if (categoryid){
    getProductosByCategory(categoryid)
         .then((resp)=> setProductos(resp))
    }else{
      getProductos()
      .then((resp)=>setProductos(resp))
    }
    
  },[categoryid])


  return (
    <div className="container">
      <h1>{props.greeting}</h1>
      
      <ItemList cursos={cursos}/>
      
    </div>
  );
}

export default ItemListContainer;