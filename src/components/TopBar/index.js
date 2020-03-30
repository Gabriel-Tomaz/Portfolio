import React from 'react';
import { Link } from 'react-router-dom';

import './topBar.css';
import imgLogo from '../../assets/img/logo.svg';

export default function TopBar(){
  return(
    <div className="topBar">
        <img src={ imgLogo } alt="Logo" className="logo"></img>
        <div className="menu">
          <ul>
            <li>
            <Link to="/">Início</Link>
            </li>
            <li>
            <Link to="/Fotografias">Fotografias</Link>
            </li>
            <li>
            <Link to="/sobre">Sobre</Link>
            </li>
          </ul>
        </div>
      </div>
  );
}