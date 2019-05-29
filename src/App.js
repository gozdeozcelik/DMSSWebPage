import React, { Component } from 'react';
import Tables from "./components/Table"
import SubmitComponent from "./components/SubmitComponent"
import Login from "./components/Login"
import MainPage from "./components/MainPage"
import UpdateDataset from "./components/UpdateDataset"
import NotFound from "./pages/NotFound"

import './App.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";


class App extends Component {
  render() {
    

    return (
    
     <Router>
     <div className="container">
     
      <hr/>
      
      <Switch>
        <Route exact path = "/" component = {Login} />
        <Route exact path = "/main" component = {MainPage} />
        <Route exact path = "/table" component = {Tables} />
        <Route exact path = "/component" component = {SubmitComponent} />
        <Route exact path = "/updatedataset" component = {UpdateDataset} />
        <Route exact path = "/logins" component = {Login} />
        <Route component = {NotFound} />
      </Switch> 
      
      
     
      
    
    </div>
     </Router>
     
    );
  }
}

export default App;
