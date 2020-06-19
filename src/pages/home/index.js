import React from 'react';
import {FaGit, FaLinkedinIn, FaInstagram} from 'react-icons/fa';

import Photos from '../photos';
import './styles.css';

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
      <div className="abstract">
        <h1 className="abstract-title">Gabriel</h1>
        <p className="abstract-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className="social">
          <p className="abstract-link" className="abstract-link" onClick={() => abrirLink(instagramLink)} title='Instagram'>
            <FaInstagram size={25} color="#CAD2C5" />
          </p>
          <p className="abstract-link" href=" " onClick={() => abrirLink(githubLink)} title='Github'>
              <FaGit size={25} color="#CAD2C5" />
          </p>
          <p className="abstract-link" href=" " onClick={() => abrirLink(linkedinLink)} title='Linkedin'>
            <FaLinkedinIn size={25} color="#CAD2C5" />
          </p>
        </div>
      </div>
      <div className="about">
          <div className="about-image profile-image"></div>
          <div className="about-card">
            <h1 className="about-card-title">Sobre mim</h1>
            <p className="about-card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="about-card">
            <h1 className="about-card-title">Sobre as fotos</h1>
            <p className="about-card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="about-image portfolio-image"></div>
        </div>
      </section>

      <Photos />
    </div>
  );
}