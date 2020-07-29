import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddVideo from './pages/add/video';
import AddCategory from './pages/add/category';
import Fourohfour from './pages/404';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/add/video' component={AddVideo} />
      <Route path='/add/category' component={AddCategory} />

      <Route component={Fourohfour} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

