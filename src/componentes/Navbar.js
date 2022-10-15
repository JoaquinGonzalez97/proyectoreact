import React from 'react'
import CardWidget from './paginas/CardWidget'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
    <link className="navbar-brand" to='/'>Healthy Life</link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <link className="nav-link active" aria-current="page" to='/'>Inicio</link>
        <link className="nav-link" to='/category/programacion'>Programacion</link>
        <link className="nav-link" to='/category/diseno'>Diseño</link>
        <CardWidget/>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar