import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import slide from './images/slide1.jpg'
import slide2 from './images/slide2.jpg'
import logo from './images/c.svg'
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

                <Nav.Link style={{ fontWeight: 'bold' ,color:'#FFFFFF'}} href="/main">ANA SAYFA</Nav.Link>
                <Nav.Link style={{ fontWeight: 'bold' ,color:'#FFFFFF'}} href="/component">BÖLGE EKLE</Nav.Link>
                <Nav.Link style={{ fontWeight: 'bold' ,color:'#FFFFFF'}} href="/table">FİYAT TAHMİNİ SONUÇLARI</Nav.Link>
                <Nav.Link style={{ fontWeight: 'bold' ,color:'#FFFFFF'}} href="/updatedataset">VERİ SETİNİ GÜNCELLE</Nav.Link>
                <Nav.Link style={{ fontWeight: 'bold' ,color:'#FFFFFF'}} href="/gift">ÖDÜLÜ GÜNCELLE</Nav.Link>
                <Nav.Link style={{ fontWeight: 'bold' ,color:'#FFFFFF'}} href="/logins"> ÇIKIŞ</Nav.Link>
                </Nav>
            </Navbar>
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
