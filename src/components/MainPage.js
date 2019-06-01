import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import slide from './images/slide1.jpg'
import slide2 from './images/slide2.jpg'
import logo from './images/b.png'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export default class MainPage extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleSelect = this.handleSelect.bind(this);
    
        this.state = {
          index: 0,
          direction: null,
        };
      }
    
      handleSelect(selectedIndex, e) {
        this.setState({
          index: selectedIndex,
          direction: e.direction,
        });
      }
  render() {
    const { index, direction } = this.state;
    return (
      <div >

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
          <br/>
          <div >
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide}
          alt="Keller Williams"
          height = "600" 
         
     
        />
        <Carousel.Caption>
          <h3>Keller Williams Admin Paneli</h3>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-40"
          src={slide2}
          alt="Third slide"
          height = "600" 
        />
    
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    
    </Carousel>
    </div>
      </div>
    )
  }
}
