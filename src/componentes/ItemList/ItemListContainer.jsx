import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getCursos, getCursosByCategory } from "../mockAPI/mockAPI";
import ItemList from "./ItemList";
import {useParams} from "react-router-dom" 

 
//import "./ItemlistContainer.css";

function ItemListContainer(props) {
  const [cursos, setCursos]= useState([])
  const  {categoryid} = useParams ()
  useEffect (()=>{
    if (categoryid){
    getCursosByCategory(categoryid)
         .then((resp)=> setCursos(resp))
    }else{
      getCursos()
      .then((resp)=>setCursos(resp))
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