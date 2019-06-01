import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import axios, {post} from 'axios'

export default class UpdateDataset extends Component {
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
        
            <Nav.Link className = "fas fa-sign-out-alt" href="/logins"> Çıkış</Nav.Link>
          </Nav.Item>
          <Nav.Item>
              
          </Nav.Item>
        </Nav>
              </div>
              <br/>
              

                 <div style={{display: 'flex'}}>
            <form onSubmit={this.handleSubmit}>
            <Form.Group as={Row} >
            <Form.Label column sm="2">
                Bölge:
            </Form.Label>
            <Col sm="10">
                <Form.Control type="text" value={this.state.region} onChange={this.handleChangeRegion} />
            </Col>
            </Form.Group>
            <Form.Group as={Row} >
            <Form.Label column sm="2">
                Tür:
            </Form.Label>
            <Col sm="10">
                <Form.Control type="text" value={this.state.type} onChange={this.handleChangeType} />
            </Col>
            </Form.Group>

            <Form.Group as={Row} >
            <Form.Label column sm="2">
                Bölüm:
            </Form.Label>
            <Col sm="10">
                <Form.Control type="text" value={this.state.bolum} onChange={this.handleChangeBolum} />
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
                <Form.Control type="text" value={this.state.aidat} onChange={this.handleChangeAidat} />
            </Col>
            </Form.Group>

            <Form.Group as={Row} >
            <Form.Label column sm="2">
                Kat Sayısı:
            </Form.Label>
            <Col sm="10">
                <Form.Control type="text" value={this.state.katSayisi} onChange={this.handleChangeKatSayisi} />
            </Col>
            </Form.Group>
            

            <Form.Group as={Row} >
            <Form.Label column sm="2">
                Bul.Kat:
            </Form.Label>
            <Col sm="10">
                <Form.Control type="text" value={this.state.bulKat} onChange={this.handleChangeBulKat} />
            </Col>
            </Form.Group>

            <Form.Group as={Row} >
            <Form.Label column sm="2">
                Fiyat:
            </Form.Label>
            <Col sm="10">
                <Form.Control type="text" value={this.state.fiyat} onChange={this.handleChangeFiyat} />
            </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formGridState">
            <Form.Label  column sm="2">Yetki: </Form.Label>
            <Col sm="10">
            <Form.Control as="select"  value={this.state.yetki} onChange={this.handleChangeYetki}>
            <option>Hayır</option>
              <option>Evet</option>
              
              
            </Form.Control>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formGridState">
          <Form.Label  column sm="2">Eşyalı: </Form.Label>
          <Col sm="10">
          <Form.Control as="select" value={this.state.esyali} onChange={this.handleChangeEsyali} >
           <option>Hayır</option>
            <option>Evet</option>
            
            
          </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formGridState">
        <Form.Label  column sm="2">Yapılı: </Form.Label>
        <Col sm="10">
        <Form.Control as="select"  value={this.state.yapili} onChange={this.handleChangeYapili} >
          <option>Hayır</option>
          <option>Evet</option>
         
          
        </Form.Control>
        </Col>
      </Form.Group>
          
            <Button bold ='true' variant="info" type="submit">Kaydet</Button>
            
          </form>
          </div>
            
            
        
        
        </div>
        
    );
  }
}


/*
çalışan labellarlı hali
<form onSubmit={this.handleSubmit}>
            <label>
              Region:
              <input type="text" value={this.state.region} onChange={this.handleChangeRegion} />
            </label>
            <label>
              Type:
              <input type="text" value={this.state.type} onChange={this.handleChangeType} />
            </label>
            <input type="submit" value="Submit" />
          </form>
          */

         
          /*
          buton çalışmazsa 
             <input type="submit" value="Kaydet" /> */