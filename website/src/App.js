import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import 'antd/dist/antd.css'; 
import Query from './pages/Query';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/run/:dataset/:query" component={Query}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
