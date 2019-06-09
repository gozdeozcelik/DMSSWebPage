import React, { Component  } from 'react'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form'
import axios, {post} from 'axios'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Navbar from 'react-bootstrap/Navbar'
import DropdownButton from 'react-bootstrap/DropdownButton'

import Nav from 'react-bootstrap/Nav'
import logo from './images/c.svg'
class UpdateAlgorithmPage extends Component{
    
    constructor(props) {
        super(props);
        this.state = {region: '',type: '', items:[],
        isLoaded:false,
        image:'', formDatas:''
      };
    
        this.handleChangeRegion = this.handleChangeRegion.bind(this);
        this.handleChangeType = this.handleChangeType.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      onChange(e)
      {
          let files= e.target.files;
          let reader = new FileReader();
          reader.readAsDataURL(files[0]);
          reader.onload= (e) => {
              console.warn("img data", e.target.result)
              const url = "http://192.168.1.26:8086/file";
              const data={email:"ozcgozd"}
              const formData={file:e.target.result}
             
              this.setState({formDatas:e.target.result})
             
          }

      }
      componentDidMount(){
        fetch("http://192.168.1.26:8086/regions")
            .then(res=> res.json())
            .then(json => {
                this.setState({
                    isLoaded:true,
                    items:json.regions,
                })
                
            });
            
    }


    
      handleChangeRegion(event) {
        this.setState({region: event.target.value});
      }
      handleChangeType(event) {
        this.setState({type: event.target.value});
      }
      handleSubmit(event) {
     
        event.preventDefault();
        const url = "http://192.168.1.26:8086/regions";
     
       
        const data={"region":this.state.region, 
            "type": this.state.type , "dataform": this.state.formDatas
        }

        return post(url,data)
            .then(response => console.warn("result",response))
            .then(this.props.history.push('/main'))
       

      }
    
      render() {
        var myStyle = {
          fontSize: 15,
          color: '#cc0000'
       }
      var{ isLoaded, items} =this.state;

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
      <br/>  <br/>
          <div style={{display: 'flex',  justifyContent:'center'  }} >

          

          <ListGroup  className="mx-4" style={{ width: "20rem" }} >
          <h5 style={{ color:'#66B3FF' }}  > Kayıtlı Bölgeler:</h5>
          {items.map(item => (
              <ListGroup.Item style={{ fontWeight: 'bold' ,color:'#000000'}} variant="light" key ={items.id}>
              {item.region }
              </ListGroup.Item>
          ))}
          </ListGroup>


        <form onSubmit={this.handleSubmit}>
        <br/>
        <br/>
       
        <h5 style={{ color:'#66B3FF' }}> Yeni Bölge Ekle</h5>
        <Form.Group as={Row} >
        <Form.Label  style={{ color:'#66B3FF', fontWeight: 'bold' }} column sm="2">
            Bölge:
        </Form.Label>
        <Col sm="10">
            <Form.Control type="text" value={this.state.region} onChange={this.handleChangeRegion} />
        </Col>
        </Form.Group>
        <Form.Group as={Row} >
        <Form.Label  style={{ color:'#66B3FF', fontWeight: 'bold' }} column sm="2">
            Tür:
        </Form.Label>
        <Col sm="10">
            <Form.Control type="text" value={this.state.type} onChange={this.handleChangeType} />
        </Col>
        </Form.Group>

        

        <i className = "fas fa-plus-circle" ></i>
        <input type="file" name ="file" onChange={(e) => this.onChange(e)} />
        <a href='https://drive.google.com/file/d/1S3a2IE073OzXP3SkZ39lqLWZaZ6gfA7F/view?usp=sharing' download>Örnek Veri Seti Şablonu İçin Tıklayınız..</a>
        <br/><br/>
        
        <Button type="submit">Kaydet</Button>
        
      </form>
      
      </div>

      </div>
        );
      }
}
export default UpdateAlgorithmPage;


