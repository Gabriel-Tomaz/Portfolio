import React from 'react';
import { Link } from 'react-router-dom';

import './home.css'; ;

export default function Home(){
  const instagramLink = 'https://www.instagram.com/negoh.css/';
  const githubLink = 'https://github.com/Gabriel-Tomaz';
  const linkedinLink = 'https://www.linkedin.com/in/gabriel-tomaz-35172a1a4/';

  function abrirLink(link){
    window.open(link);
  }

  return(
    <div className="main">
      <section className="home">
        <div className="topBar">
          <p className="title-topBar">Gabriel Tomaz</p>
          <div className="menu">
            <Link to="/fotografias">
              <p>Fotografias</p>
            </Link>
            <Link to="/sobre">
              <p>Sobre</p>
            </Link>
          </div>
        </div>
        <p className="desc">
            Olá meu nome é Gabriel e esse é o meu portfólio de fotografias autorais, 
          eu o desenvolvi como uma forma de aplicar conhecimentos na minha área de estudos e 
          expor um pouco desse meu hobby que é a fotografia com o smarphone. 
          Então fique a vontade para explorar a aba das <Link to='/fotografias'><b className='desc-home-link'>fotos</b></Link>, 
          e para conhecer um pouco mais o site acesse a página <Link to='/sobre'><b className='desc-home-link'>sobre</b></Link>.
        </p>
        <div className="rodape">
          <div className="contato">
            <a onClick={() => abrirLink(instagramLink)} title='Instagram'>
              <p className="title-link">Instagram</p>
            </a>
            <a onClick={() => abrirLink(linkedinLink)} title='Linkedin'>
              <p className="title-link">Linkedin</p>
            </a>
            <a onClick={() => abrirLink(githubLink)} title='Github'>
              <p className="title-link">Github</p>
            </a>
          </div>
          <p className="titleRodape">2020 Gabriel Tomaz ©</p>
        </div>
      </section>
    </div>
  );
}