import React, { useState,useEffect } from 'react';

import api from '../../services/api';
import './fotografias.css';
import TopBar from '../../components/TopBar';
import Rodape from '../../components/Rodape';

export default function Fotografias(){
  const [fotos,setFotos] = useState([]);
  const apiUrl ='users/negoh_jpg/photos/';

  useEffect(() => {
    api.get(apiUrl).then(response => {
      setFotos(response.data);
    });
  },[]);

  return(
    <div className="main">
        <TopBar/>
        <div className="galeria">
          <h1 className="title-galeria">Fotografias</h1>
          <ul>
            { fotos.map( foto => (
              <li key={ foto.id } className='card-foto'>
                <img src={ foto.urls.small } alt={foto.description}/>
              </li>
            )) }
          </ul>
        </div>
        <Rodape/>
    </div>
  );
}