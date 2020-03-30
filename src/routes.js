import React from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';

import Home from './pages/home';
import Fotografias from './pages/fotografias';
import Sobre from './pages/sobre';

export default function Routes(){
  return(
    <BrowserRouter>
      <Route path='/' exact component={Home}/>
      <Route path='/fotografias' component={Fotografias}/>
      <Route path='/sobre' component={Sobre}/>
    </BrowserRouter>
  );
}