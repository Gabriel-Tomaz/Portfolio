import React from 'react';

import './sobre.css';
import TopBar from '../../components/TopBar';
import Rodape from '../../components/Rodape';

export default function Sobre(){  
  const reactUrl = 'https://pt-br.reactjs.org/';
  const githubUrl = 'https://github.com/Gabriel-Tomaz/novo-portfolio';
  const unsplashUrl = 'https://unsplash.com/';

  function abrirLink(link){
    window.open(link);
  }


  return(
    <div className="main">
       <TopBar/>
       <div className='sobre'>
         <h1 className='title-sobre'>Sobre este site</h1>
         <p className='desc-sobre'>
         Esse site foi desenvolvido como objeto de estudos pessoais e para aplicação de novos 
         conhecimentos. Eu o desenvolvi utilizando o framework javascript 
         <b className='react' onClick={() => abrirLink(reactUrl)}> React </b>, as fotos estão 
         sendo pegas via api rest da plataforma <b className='unsplash' onClick={() => abrirLink(unsplashUrl)}> Unsplash </b> que um dos maiores  repositórios de 
         imagens públicas do mundo(Muito bom). 
         O código fonte da aplicação está em um repositório público do <b className='github' onClick={() => abrirLink(githubUrl)}>Github</b>, 
         então se tiver interesse fique a vontade para conferir. 
        </p>
       </div>
       <Rodape/>
    </div>
  );
}