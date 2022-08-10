import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'

function Navigation(){  //making link to various routes
       return(<div className="symbols">
       <div><Link to="/">🏠</Link></div>
       <div><Link to="/add">📅</Link></div>
       <div><Link to="/list">📅</Link></div>
       </div>)
}
export default Navigation;