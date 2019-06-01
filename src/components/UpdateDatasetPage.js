import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import logo from './images/c.svg'
import axios, {post} from 'axios'

export default class UpdateDatasetPage extends Component {

  
    constructor(props) {
        super(props);
        this.state = {region: '',type: '', fiyat:'', yetki:'', yapili:'', esyali:'', bolum:'',m2:'', katSayisi:'', bulKat:'', aidat:''};
    
        this.handleChangeRegion = this.handleChangeRegion.bind(this);
        this.handleChangeType = this.handleChangeType.bind(this);
        this.handleChangeYetki = this.handleChangeYetki.bind(this);
        this.handleChangeYapili = this.handleChangeYapili.bind(this);
        this.handleChangeEsyali = this.handleChangeEsyali.bind(this);
        this.handleChangeFiyat = this.handleChangeFiyat.bind(this);
        this.handleChangeBolum = this.handleChangeBolum.bind(this);
        this.handleChangeM2 = this.handleChangeM2.bind(this);
        this.handleChangeKatSayisi = this.handleChangeKatSayisi.bind(this);
        this.handleChangeBulKat = this.handleChangeBulKat.bind(this);
        this.handleChangeAidat = this.handleChangeAidat.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChangeFiyat(event) {
        this.setState({fiyat: event.target.value});
      }
      handleChangeEsyali(event) {
        this.setState({esyali: event.target.value});
      }
      handleChangeBolum(event) {
        this.setState({bolum: event.target.value});
      }
      handleChangeM2(event) {
        this.setState({m2: event.target.value});
      }
      handleChangeKatSayisi(event) {
        this.setState({katSayisi: event.target.value});
      }
      handleChangeBulKat(event) {
        this.setState({bulKat: event.target.value});
      }
      handleChangeAidat(event) {
        this.setState({aidat: event.target.value});
      }
      handleChangeYapili(event) {
        this.setState({yapili: event.target.value});
      }
      handleChangeYetki(event) {
        this.setState({yetki: event.target.value});
      }
      handleChangeRegion(event) {
        this.setState({region: event.target.value});
      }
      handleChangeType(event) {
        this.setState({type: event.target.value});
      }
      handleSubmit(event) {

         
          console.log('yapili:' , this.state.yapili);
          console.log('bölge:' , this.state.region);
          console.log('tür:' , this.state.type);
          console.log('fiyat:' , this.state.fiyat);

    
        event.preventDefault();
        const url = "http://192.168.43.165:8086/updateDataset";
        const data={"region":this.state.region, 
            "type": this.state.type, "fiyat": this.state.fiyat , "yetki": this.state.yetki , "yapili": this.state.yapili ,"esyali": this.state.esyali,
            "bolum": this.state.bolum, "m2": this.state.m2, "katSayisi": this.state.katSayisi, "bulKat": this.state.bulKat,  "aidat": this.state.aidat
        }
        console.log("data",data)
        return post(url,data)
            .then(response => console.warn("result",response))

      }
  render() {
    return (

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

                <Nav.Link style={{ fontWeight: 'bold' ,color:'#FFFFFF'}} href="/main">ANA SAYFA</Nav.Link>
                <Nav.Link style={{ fontWeight: 'bold' ,color:'#FFFFFF'}} href="/table">SONUÇLARI LİSTELE</Nav.Link>
                <Nav.Link style={{ fontWeight: 'bold' ,color:'#FFFFFF'}} href="/component">BÖLGE EKLE</Nav.Link>
                <Nav.Link style={{ fontWeight: 'bold' ,color:'#FFFFFF'}} href="/updatedataset">VERİ SETİNİ GÜNCELLE</Nav.Link>
                <Nav.Link style={{ fontWeight: 'bold' ,color:'#FFFFFF'}} href="/logins"> ÇIKIŞ</Nav.Link>
                </Nav>
            </Navbar>
            <br/>
            <div style={{display: 'flex',  justifyContent:'center'  }}>
                <Card  bg="light"   text="primary" style={{ width: '40rem',justifyContent:'center' }}>
                <Card.Body>
                    <Card.Title >Veri Seti Güncelleme Formu </Card.Title>
                    
                   
                    <form onSubmit={this.handleSubmit}>
                    <Form.Row>
                    <Form.Group as={Col} >
                    <Form.Label>Bölge</Form.Label>
                    <Form.Control type="text"  value={this.state.region} onChange={this.handleChangeRegion}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Tür</Form.Label>
                    <Form.Control value={this.state.type} onChange={this.handleChangeType}  type="text" placeholder="İş Yeri, Konut, Rezidans.." />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} >
                    <Form.Label> Kat Sayısı:</Form.Label>
                    <Form.Control type="text" value={this.state.katSayisi} onChange={this.handleChangeKatSayisi} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label> Bul.Kat:</Form.Label>
                    <Form.Control type="text" value={this.state.bulKat} onChange={this.handleChangeBulKat} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} >
                    <Form.Label> Yetki:</Form.Label>
                    <Form.Control as="select"  value={this.state.yetki} onChange={this.handleChangeYetki}>
                    <option>Hayır</option>
                    <option>Evet</option>
                    
                    
                    </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label> Eşyalı:</Form.Label>
                    <Form.Control as="select" value={this.state.esyali} onChange={this.handleChangeEsyali} >
                <option>Hayır</option>
                    <option>Evet</option>
                    
                    
                </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label> Yapılı:</Form.Label>
                    <Form.Control as="select"  value={this.state.yapili} onChange={this.handleChangeYapili} >
                <option>Hayır</option>
                <option>Evet</option>
                
                
                </Form.Control>
                </Form.Group>
   
              

                </Form.Row>
                    <Form.Group as={Row} >
                    <Form.Label column sm="2">
                        Bölüm:
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" value={this.state.bolum} onChange={this.handleChangeBolum} placeholder="1+1, 2+1, 5+2..." />
                    </Col>
                    </Form.Group>

                    <Form.Group as={Row} >
                    <Form.Label column sm="2">
                        m2:
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" value={this.state.m2} onChange={this.handleChangeM2} />
                    </Col>
                    </Form.Group>

                    <Form.Group as={Row} >
                    <Form.Label column sm="2">
                        Aidat:
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" value={this.state.aidat} onChange={this.handleChangeAidat} placeholder="Türk Lirası" />
                    </Col>
                    </Form.Group>
                    <Form.Group as={Row} >
                    <Form.Label column sm="2">
                        Fiyat:
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" value={this.state.fiyat} onChange={this.handleChangeFiyat} placeholder="Türk Lirası"/>
                    </Col>
                    </Form.Group>
                    <Button variant="primary" type="submit">Kaydet</Button>
                    
                </form>
               
                    
                </Card.Body>
                </Card>
                </div>
            </div>
   
        
    );
  }
}


