
import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import ReactTable from "react-table";
import ListGroup from 'react-bootstrap/ListGroup';
import "react-table/react-table.css"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from './images/c.svg'
import axios, {post, get} from 'axios'
export default class ResultTablePage extends Component {
    constructor() {
        super();
        this.state = {
           data: []
        }
     }
     componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res=> res.json())
            .then(json => {
                this.setState({
                  
                    data:json,
                })
                
            });
            
      }
        
    
    render (){
          return(
              <div>
    
              <Navbar style={{display: 'flex',  justifyContent:'center'  ,backgroundColor:'#000000',textColor:'#000000',height: '5rem'}} >
              <Navbar.Brand  style={{color:'#66B3FF',fontWeight: 'bold'}} href="/main">
              <img 
              alt=""
              src= {logo}
              width="50"
              height="50"
              
              />
              {' Keller Williams'}
              </Navbar.Brand>
              <ul/><ul/><ul/><ul/><ul/><ul/><ul/><ul/><ul/><ul/><ul/><ul/><ul/><ul/>

              <Nav className="mr-auto">

              <Nav.Link style={{ fontWeight: 'bold' ,color:'#FFFFFF'}} href="/main">ANASAYFA</Nav.Link>
              <Nav.Link style={{ fontWeight: 'bold' ,color:'#FFFFFF'}} href="/table">SONUÇLARI LİSTELE</Nav.Link>
              <Nav.Link style={{ fontWeight: 'bold' ,color:'#FFFFFF'}} href="/component">BÖLGE EKLE</Nav.Link>
              <Nav.Link style={{ fontWeight: 'bold' ,color:'#FFFFFF'}} href="/updatedataset">VERİ SETİNİ GÜNCELLE</Nav.Link>
              <Nav.Link style={{ fontWeight: 'bold' ,color:'#FFFFFF'}} href="/logins"> ÇIKIŞ</Nav.Link>
              </Nav>
          </Navbar>
                        <div>
                        <br/><br/>
                        
                        <div  className="container">
                        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}className="row">
                           <div className="col-md-6 col-md-offset-5">
                              
                           <Table striped bordered hover variant="light">
                                 <tr>
                                    <th style={{ fontWeight: 'bold' ,color:'#66B3FF'}}>Bölge</th>
                                    <th style={{ fontWeight: 'bold' ,color:'#66B3FF'}}>Tür</th> 
                                    <th style={{ fontWeight: 'bold' ,color:'#66B3FF'}}>KNN</th> 
                                    <th style={{ fontWeight: 'bold' ,color:'#66B3FF'}}>Decision Tree</th> 
                                 </tr>
                                 {this.state.data.slice(0,5).map(event => (<tr>
                                    <td style={{ fontWeight: 'bold' }}>{event.name}</td>
                                    <td style={{ fontWeight: 'bold' }}>{event.username}</td>
                                    <td style={{ fontWeight: 'bold' }}>{event.email}</td>
                                    <td style={{ fontWeight: 'bold' }}>{event.username}</td>
                                 </tr>))}
                              </Table>
                           </div>
                        </div>
                      </div>  
                       
                    </div>
                  
              </div>
    
    
             
    
              
    
          )
      }
    
    }
    
/*
duygu:
componentDidMount(){
  fetch("http://192.168.43.165:8086/results")
      .then(res=> res.json())
      .then(json => {
          this.setState({
              isLoaded:true,
              items:json.results,
          })
          
      });
      
}

*/

/*
evde çalışan:

    
componentDidMount(){
  fetch("https://jsonplaceholder.typicode.com/users")
      .then(res=> res.json())
      .then(json => {
          this.setState({
              isLoaded:true,
              items:json,
          })
          
      });
      
}
*/


/*
getli hali
componentDidMount(){

    var th = this;
    this.serverRequest = axios.get("https://jsonplaceholder.typicode.com/users")
    .then(function(event) { 
        th.setState({
            data: event.data
        });
    })
            
      }

      */