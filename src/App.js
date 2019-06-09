import React, { Component } from 'react';
import MainPage from "./components/MainPage"
import NotFound from "./pages/NotFound"
import LoginPage from './components/LoginPage'
import UpdateDatasetPage from './components/UpdateDatasetPage'
import ResultTablePage from './components/ResultTablePage'
import UpdateAlgorithmPage from './components/UpdateAlgorithmPage'
import GiftPage from './components/giftPage'

import './App.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";


class App extends Component {
  render() {
    

    return (
    
     <Router>
     <div >

      <hr/>
      
      <Switch>
        <Route exact path = "/" component = {LoginPage} />
        <Route exact path = "/main" component = {MainPage} />
        <Route exact path = "/table" component = {ResultTablePage} />
        <Route exact path = "/component" component = {UpdateAlgorithmPage} />
        <Route exact path = "/updatedataset" component = {UpdateDatasetPage} />
        <Route exact path = "/gift" component = {GiftPage} />
        <Route exact path = "/logins" component = {LoginPage} />
        <Route component = {NotFound} />
      </Switch> 
     
    </div>
     </Router>
     
    );
  }
}

export default App;
