import React, { useState,useEffect } from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { Link } from 'react-router-dom'

import api from '../../services/api';
import './fotografias.css';

export default function Fotografias(){
  const [fotos,setFotos] = useState([]);
  const apiUrl ='users/negoh_jpg/photos/?client_id=D0LBzLz8h7rEBO9VM2sMeJefIQfaeq4IHBxNmH7_is';

  useEffect(() => {
    api.get(apiUrl).then(response => {
      setFotos(response.data);
    });
  },[]);

  return(
    <div className="main">
      <section className="fotografias">
        <div className="topBarFotos">
          <Link to="/">
            <MdKeyboardArrowLeft size="60px" color="#000" className="back-icon" />
          </Link>
          <p className="title-page">fotografias</p>
        </div>
        <div className="galeria">
          <ul>
            { fotos.map( foto => (
              <li key={ foto.id } className='card-foto'>
                <img src={ foto.urls.regular } alt={foto.description} loading="lazy"/>
              </li>
            )) }
          </ul>
        </div>
      </section>
    </div>
  );
}