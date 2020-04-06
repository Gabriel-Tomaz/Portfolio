import React from 'react';
import { Link } from 'react-router-dom';
import { DropdownButton,Dropdown } from 'react-bootstrap';

import './menuMobile.css'

export default function menuMobile(){
  return(
    <DropdownButton id="dropdown-basic-button" title="Menu" className="menuMobile">
      <Dropdown.Item>
        <Link to="/fotografias">
          <p className="title-menuMobile">Fotografias</p>
        </Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to="/sobre">
          <p className="title-menuMobile">Sobre</p>
        </Link>
      </Dropdown.Item>
    </DropdownButton>
  );
}