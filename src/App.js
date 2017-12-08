import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import CatalogComponent from './components/CatalogComponent/CatalogComponent'
import CheckoutComponent from './components/CheckoutComponent/CheckoutComponent'

class App extends Component {
  render() {
    return (
      <div classname="App">
      <BrowserRouter>
      <Switch>
      <Route
      exact path="/"
      render={() => 
      <div>
        <p><Link to='/catalog'>Catalog</Link></p>
      </div>}/>
      <Route exact path='/catalog' render={() => <CatalogComponent/>}/>
      <Route exact path='/checkout' render={() => <CheckoutComponent />} />
      </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
