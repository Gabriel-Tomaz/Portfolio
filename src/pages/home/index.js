import React from 'react';
import { FaInstagram,FaFacebookSquare,FaEnvelope,FaGithub } from 'react-icons/fa';

import imgLogo from '../../assets/img/logo.svg';

import './home.css'; 

export default function Home(){
  return(
    <div className="main-home">
      <div className="topBar">
        <img src={ imgLogo } alt="Logo" className="logo"></img>
        <div className="menu">
          <ul>
            <li>
              <a>Inicio</a>
            </li>
            <li>
              <a>Fotografias</a>
            </li>
            <li>
              <a>Sobre</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="imgPerfil"></div>
      <h1 className="title">Gabriel Tomaz</h1>
      <p className="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi dicta at veniam, in eaque culpa consequuntur quasi ullam cum. Corrupti reiciendis dignissimos animi laborum veniam doloribus sunt quidem, quam quo!</p>
      <div className="contato">
        <a href="http://instagram.com">
          <FaInstagram color="#BDBDBD" size={30} className="icon"/>
        </a>
        <a href="http://facebook.com">
          <FaFacebookSquare color="#BDBDBD" size={30} className="icon" />
        </a>
        <a href="http://facebook.com">
          <FaEnvelope color="#BDBDBD" size={30} className="icon" />
        </a>
        <a href="http://facebook.com">
          <FaGithub color="#BDBDBD" size={30} className="icon" />
        </a>
      </div>
      <div className="rodape">
        <p className="titleRodape">2020 Gabriel Tomaz ©</p>
      </div>
    </div>
  );
}