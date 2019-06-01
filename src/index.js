
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginPage from './components/LoginPage'
import MainPage from './components/MainPage'
import UpdateDatasetPage from './components/UpdateDatasetPage'
import ResultTablePage from './components/ResultTablePage'
import UpdateAlgorithmPage from './components/UpdateAlgorithmPage'


import SubmitComponent from './components/SubmitComponent'

import Table from './components/Table'
import UpdateDataset from './components/UpdateDataset'
import  DisplayResult from './components/displayResultTable'

ReactDOM.render(<App/>, document.getElementById('root'));


/*
ReactDOM.render(
    <UserProvider>
    <App />
    </UserProvider>
    , 
    document.getElementById('root'));
serviceWorker.unregister();
*/