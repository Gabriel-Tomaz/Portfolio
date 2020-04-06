import React, { useState,useEffect,useCallback } from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Gallery from 'react-photo-gallery';
import Carousel,{ Modal,ModalGateway } from 'react-images';

import api from '../../services/api';
import './fotografias.css';

export default function Fotografias(){
  const [imagemAtual,setImagemAtual] = useState(0);
  const [imagemAberta,setImagemAberta] = useState(false);

  const abrirImagem = useCallback((event, {photo,index}) => {
    setImagemAtual(index);
    setImagemAberta(true);
  },[]);

  const fecharImagem = () => {
    setImagemAtual(0);
    setImagemAberta(false);
  }

  const [fotos,setFotos] = useState([]);
  const apiUrl ='users/negoh_jpg/photos/';

  useEffect(() => {
    api.get(apiUrl).then(response => {
      setFotos(response.data);
    });
  },[]);

  const photos = [];
  fotos.map(foto => (
    photos.push(
      {
        title: foto.title,
        src:foto.urls.regular,
        srcFull:foto.urls.full,
        width: foto.width,
        height: foto.height
      }
    )
  ));

  return(
    <div className="main">
      <section className="fotografias">
        <div className="topBarFotos">
          <Link to="/">
            <MdKeyboardArrowLeft  color="#000" className="back-icon" />
          </Link>
          <p className="title-page">fotografias</p>
        </div>
        <div className="galeria">
          <Gallery photos={ photos } onClick={ abrirImagem }/>
          <ModalGateway>
            {imagemAberta ?(
              <Modal onClose={ fecharImagem }>
                <Carousel 
                  currentIndex={ imagemAtual } 
                  views={photos.map(foto => ({
                    ...foto,
                    srcset: foto.srcFull,
                    caption: foto.title
                  }))}></Carousel>
              </Modal>
            ): null}
          </ModalGateway>
        </div>
      </section>
    </div>
  );
}