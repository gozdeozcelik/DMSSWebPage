
import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import ReactTable from "react-table";
import ListGroup from 'react-bootstrap/ListGroup';
import "react-table/react-table.css"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from './images/b.png'
import axios, {post, get} from 'axios'
export default class displayResultTable extends Component {
    constructor() {
        super();
        this.state = {
           data: []
        }
     }
    
        
    componentDidMount(){

    var th = this;
    this.serverRequest = axios.get("https://jsonplaceholder.typicode.com/users")
    .then(function(event) { 
        th.setState({
            data: event.data
        });
    })
            
      }
    render (){
          return(
              <div>
    
                        <div>
                                <Navbar bg="info" variant="dark" >
            <Navbar.Brand href="/main">
            <img
                alt=""
                src= {logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
            />
            {' Keller Williams'}
            </Navbar.Brand>
            <ul/><ul/><ul/><ul/><ul/><ul/><ul/><ul/><ul/><ul/><ul/><ul/><ul/><ul/><ul/>
            
            <Nav className="mr-auto">
          
            <Nav.Link  className="fas fa-home"  href="/main">Anasayfa</Nav.Link>
            <Nav.Link  className="fas fa-poll-h" href="/table">Bölge Sonuçları</Nav.Link>
            <Nav.Link className = "fas fa-plus-circle" href="/component">Bölge Ekle</Nav.Link>
            <Nav.Link  className="fas fa-pen-square" href="/updatedataset">Verileri Güncelle</Nav.Link>
            <Nav.Link className = "fas fa-sign-out-alt" href="/logins"> Çıkış</Nav.Link>
           </Nav>
        </Navbar>
                        </div>
                        <div>
                        <br/>
                        
                        <div className="container">
                        <div className="row">
                           <div className="col-md-6 col-md-offset-5">
                              <h1 className="title">All Events</h1>
                              <Table striped bordered hover variant="danger">
                                 <tr>
                                    <th>Name</th>
                                    <th>Surname</th> 
                                    <th>Email</th> 
                                 </tr>
                                 {this.state.data.slice(0,5).map(event => (<tr>
                                    <td>{event.name}</td>
                                    <td>{event.username}</td>
                                    <td>{event.email}</td>
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
    
