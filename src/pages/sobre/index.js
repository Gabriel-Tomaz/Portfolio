import React from 'react';

import './sobre.css';
import TopBar from '../../components/TopBar';
import Rodape from '../../components/Rodape';

export default function Sobre(){
  return(
    <div className="main">
       <TopBar/>
       <div className='sobre'>
         <h1 className='title-sobre'>Sobre este site</h1>
         <p className='desc-sobre'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Delectus voluptatum ut natus sunt minima dolorem rerum obcaecati facilis, 
            nam aspernatur unde illo iusto cumque tempora incidunt neque quae voluptates facere!
        </p>
       </div>
       <Rodape/>
    </div>
  );
}