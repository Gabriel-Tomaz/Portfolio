import React from 'react';
import { BrowserRouter,Route} from 'react-router-dom';

import Home from './pages/home';
import Photos from './pages/photos';


export default function Routes(){
  return(
    <BrowserRouter>
      <Route path='/' exact component={Home}/>
      <Route path='/photos' component={Photos}/>
    </BrowserRouter>
  );
}