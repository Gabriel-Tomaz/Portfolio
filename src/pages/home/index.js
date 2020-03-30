import React from 'react';
import { FaInstagram,FaFacebookSquare,FaEnvelope,FaGithub,FaLinkedinIn } from 'react-icons/fa';

import './home.css'; 
import TopBar from '../../components/TopBar';
import Rodape from '../../components/Rodape';

export default function Home(){
  const instagramLink = 'https://www.instagram.com/negoh.css/';
  const facebookLink = 'https://www.facebook.com/joaogabriel.tomaz.3';
  const email = 'mailto: jgabrieltomaz2706@gmail.com';
  const githubLink = 'https://github.com/Gabriel-Tomaz';
  const linkedinLink = 'https://www.linkedin.com/in/gabriel-tomaz-35172a1a4/';

  function abrirLink(link){
    window.open(link);
  }

  return(
    <div className="main">
      <TopBar />
      <div className="imgPerfil"></div>
      <h1 className="title">Gabriel Tomaz</h1>
      <p className="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi dicta at veniam, in eaque culpa consequuntur quasi ullam cum. Corrupti reiciendis dignissimos animi laborum veniam doloribus sunt quidem, quam quo!</p>
      <div className="contato">
        <a onClick={() => abrirLink(instagramLink)}>
          <FaInstagram color="#BDBDBD" size={30} className="icon"/>
        </a>
        <a onClick={() => abrirLink(facebookLink)}>
          <FaFacebookSquare color="#BDBDBD" size={30} className="icon" />
        </a>
        <a onClick={() => {abrirLink(email)}}>
          <FaEnvelope color="#BDBDBD" size={30} className="icon" />
        </a>
        <a onClick={() => abrirLink(githubLink)}>
          <FaGithub color="#BDBDBD" size={30} className="icon" />
        </a>
        <a onClick={() => abrirLink(linkedinLink)}>
          <FaLinkedinIn color="#BDBDBD" size={30} className="icon" />
        </a>
      </div>
      <Rodape/>
    </div>
  );
}