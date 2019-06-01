import React, { Component } from 'react';
import Tables from "./components/Table"
import SubmitComponent from "./components/SubmitComponent"
import Login from "./components/Login"
import MainPage from "./components/MainPage"
import UpdateDataset from "./components/UpdateDataset"
import NotFound from "./pages/NotFound"
import LoginPage from './components/LoginPage'
import UpdateDatasetPage from './components/UpdateDatasetPage'
import ResultTablePage from './components/ResultTablePage'
import UpdateAlgorithmPage from './components/UpdateAlgorithmPage'

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
        <Route exact path = "/logins" component = {LoginPage} />
        <Route component = {NotFound} />
      </Switch> 
     
    </div>
     </Router>
     
    );
  }
}

export default App;
