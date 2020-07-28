import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddVideo from './pages/add/video';
import AddCategory from './pages/add/category';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/add/video' component={AddVideo} />
      <Route path='/add/category' component={AddCategory} />

      <Route component={() => (<div>Page 404</div>)} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

