import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import logo from './images/slide1.jpg'
import logo2 from './images/slide2.jpg'
import Nav from 'react-bootstrap/Nav';
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
      <div>

          <div>
          <Nav fill variant="tabs" defaultActiveKey="/">
          <Nav.Item>
        
          <Nav.Link  className="fas fa-home"  href="/main">Anasayfa</Nav.Link>
        </Nav.Item>
          <Nav.Item>
        
            <Nav.Link  className="fas fa-poll-h" href="/table">Bölge Sonuçları</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className = "fas fa-plus-circle" href="/component">Bölge Ekle</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link  className="fas fa-pen-square" href="/updatedataset">Verileri Güncelle</Nav.Link>
          </Nav.Item>
          <Nav.Item>
        
            <Nav.Link className = "fas fa-sign-out-alt" href="/logins">Çıkış</Nav.Link>
          </Nav.Item>
          <Nav.Item>
              
          </Nav.Item>
        </Nav>
          </div>
          <br/>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={logo}
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
          src={logo2}
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
    )
  }
}
