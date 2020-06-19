import React, { useState,useEffect,useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel,{ Modal,ModalGateway } from 'react-images';

import api from '../../services/api';

export default function Fotografias(){
  const [currentImage,setCurrentImage] = useState(0);
  const [openingImage,setOpeningImage] = useState(false);
  const [photos,setPhotos] = useState([]);
  const [page,setPage] = useState(1);
  const [photoPage,setPhotoPage] = useState(10);
  const [totalPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const apiUrl = ``;


  function handleScroll(){
    //Verificando o tamanho interno da página, a posição do scroll e o tamanho tatal da página;
    if(window.innerHeight + document.documentElement.scrollTo < 
      document.documentElement.offsetHeight || page === totalPage || loading){
        return;
      }

      setPage(page + 1);
  }

  async function getPhotos(){
    await api.get(apiUrl)
    .then(response => {
      setTotalPage(response.headers['X-Total-Count'] / photoPage);
      return response.data;
    })
    .then(data => setPhotos([...photos, ...data]));
    setLoading(true)
  }

  useEffect(() => {
   getPhotos();
   window.addEventListener('scroll' ,handleScroll);

  },[page]);

  const openImage = useCallback((event, {photo,index}) => {
    setCurrentImage(index);
    setOpeningImage(true);
  },[]);

  const closeImage = () => {
    setCurrentImage(0);
    setOpeningImage(false);
  }

  console.log(photos);

  return(
    <section className="photos">
      <div className="photos-list">
        <Gallery photos={ 
          photos.map(photo => ({
            src: photo.urls.regular,
            width: photo.width,
            height: photo.height,
          }))
        } onClick={ openImage }/>
        <ModalGateway>
          {openingImage ?(
            <Modal onClose={ closeImage }>
              <Carousel 
                currentIndex={ currentImage } 
                views={photos.map(photo => ({
                  ...photo,
                  src: photo.urls.full,
                  caption: photo.title
                }))}></Carousel>
            </Modal>
          ): null}
        </ModalGateway>
      </div>
    </section>
  );
}