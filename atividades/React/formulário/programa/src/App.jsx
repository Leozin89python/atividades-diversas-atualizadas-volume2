import React, {Component} from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import Home from './components/home/Home'
import Table from './components/table/Table'

import './App.css';

export default class App extends Component {
  
      render(){
        return (
          <div className="App">
              <BrowserRouter>
                  <Switch>
                      <Route exact={true} path="/" component={Home}/>
                      <Route exact={true} path="/tables" component={Table}/>
                  </Switch>
              </BrowserRouter>
          </div>
        );
      }
}


