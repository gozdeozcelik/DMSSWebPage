import React, { Component , Text} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import logo from './images/login.png'
import axios, {post} from 'axios'
import LoginNavbar from "./loginNavbar"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '',password: '', deneme:'2', error:'', res:''};

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeEmail(event) {
   

    this.setState({email: event.target.value});
  }
  handleChangePassword(event) {
    this.setState({password: event.target.value});
  }
  handleSubmit(event) {
      console.log('email:' , this.state.email);
      console.log('password:' , this.state.password);
     
      event.preventDefault();
      const url = "http://192.168.43.165:8086/user";
      const data={"email":this.state.email, 
          "password": this.state.password
      }
      post(url,data ,{ mode: 'no-cors' })
          .then(response =>  {
          
            if(response.status == 200){
              this.props.history.push('/main')
            

            }
            else if(response.status == 204){
               console.log("Username password do not match");
               this.setState({error:"Bilgilerinizi kontrol ediniz... "})
            
            }
            
          })
  }
  render() {
    
    return (
      <div>
      
      
      

      <div style={{display: 'flex', justifyContent: 'center'}}>

        
       
 
  
        
            <Card border="primary" >
            <Card.Img variant="top" 
            height="200" src={logo} />
            <Card.Header>Keller Williams Admin Ekranı Girişi</Card.Header>
          <Card.Body>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control type="email" placeholder="Lütfen email adresinizi giriniz"  value={this.state.email} onChange={this.handleChangeEmail} />
                  
                </Form.Group>
              
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Şifre</Form.Label>
                  <Form.Control type="password" placeholder="Lütfen şifrenizi giriniz" value={this.state.password} onChange={this.handleChangePassword}/>
                </Form.Group>
                <Form.Label>{this.state.error}</Form.Label>
                <br/>
                <Button type="submit">Giriş</Button>
            
                
              </Form>
        
         </Card.Body>
     
    </Card>
      </div>
      </div>
        
    )
  }
}

/*
NAVBAR İSTERSEN:
<LoginNavbar title = "Keller Williams"/>
      <hr/>

      */