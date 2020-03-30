import React from 'react';
import { FaInstagram,FaFacebookSquare,FaEnvelope,FaGithub,FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
      <p className="desc">
          Olá meu nome é Gabriel e esse é o meu portfólio de fotografias autorais, 
        eu o desenvolvi como uma forma de aplicar conhecimentos na minha área de estudos e 
        expor um pouco desse meu hobby que é a fotografia com o smarphone. 
        Então fique a vontade para explorar a aba das <Link to='/fotografias'><b className='desc-home-link'>fotos</b></Link>, 
        e para conhecer um pouco mais o site acesse a página <Link to='/sobre'><b className='desc-home-link'>sobre</b></Link>.
      </p>
      <div className="contato">
        <a onClick={() => abrirLink(instagramLink)} title='Instagram'>
          <FaInstagram color="#BDBDBD" size={30} className="icon"/>
        </a>
        <a onClick={() => abrirLink(facebookLink)} title='Facebook'>
          <FaFacebookSquare color="#BDBDBD" size={30} className="icon" />
        </a>
        <a onClick={() => {abrirLink(email)}} title='Gmail'>
          <FaEnvelope color="#BDBDBD" size={30} className="icon" />
        </a>
        <a onClick={() => abrirLink(githubLink)} title='Github'>
          <FaGithub color="#BDBDBD" size={30} className="icon" />
        </a>
        <a onClick={() => abrirLink(linkedinLink)} title='Linkedin'>
          <FaLinkedinIn color="#BDBDBD" size={30} className="icon" />
        </a>
      </div>
      <Rodape/>
    </div>
  );
}