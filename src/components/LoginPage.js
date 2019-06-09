import React, { Component , Text} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import logos from './images/c.jpg'
import axios, {post} from 'axios'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '',password: '', error:'', res:''};
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
      t
      event.preventDefault();
      const url = "http://192.168.1.26:8086/webUser";
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
        <div style={styles.header}>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        
          <div style={{display: 'flex', justifyContent: 'center',fontWeight: 'bold' }}>
            <Card bg="light"   text="info" style={{ width: '18rem' }} >
            <Card.Img variant="top" src={logos}/>
              <Card.Header>Keller Williams Admin Paneli</Card.Header>
              <Card.Body>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Email"  value={this.state.email} onChange={this.handleChangeEmail} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Şifre" value={this.state.password} onChange={this.handleChangePassword}/>
                </Form.Group>

                <div style={{display: 'flex',fontWeight: 'normal', text:'wight'}} >
                            <Form.Group controlId="formBasicChecbox">
                <Form.Check  variant="white" type="checkbox" label="Beni Hatırla" />
                </Form.Group>
                </div>
                <Form.Label>{this.state.error}</Form.Label>
                
                <Button bold ='true' variant="info" type="submit"  >Giriş</Button>
          
              </Form>
      
              </Card.Body>
      
          </Card>    
       </div>
      </div>
    </div>
    )
  }
}
const styles = {
  header: {
    backgroundImage: 'url(https://source.unsplash.com/VviFtDJakYk/)',
    height: '100vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },

  content: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }
}

