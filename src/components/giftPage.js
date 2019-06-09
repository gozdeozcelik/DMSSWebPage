import React, { Component  } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import ImageUploader from 'react-images-upload'
import axios, {post} from 'axios'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from './images/c.svg'

export default class giftPage extends Component {

   
    constructor(props) {
        super(props);
        this.state = {mesage: '',
        isLoaded:false,
        image:'', formDatas:'', pictures: [] 
      };
        this.onDrop = this.onDrop.bind(this);
        this.handleChangeGift = this.handleChangeGift.bind(this);
      
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
                })
                
            });
            
    }


    
      handleChangeGift(event) {
        this.setState({mesage: event.target.value});
      }
     
      handleSubmit(event) {
        
        event.preventDefault();
        const url = "http://192.168.1.26:8086/regions";
         console.log("mesaj", this.state.mesage)
       console.log("resim", this.state.formDatas)
        const data={"mesage":this.state.mesage, 
             "dataform": this.state.formDatas
        }

        return post(url,data)
            .then(response => console.warn("result",response))
            .then(this.props.history.push('/main'))
       

      }
      onDrop(picture) {
         
        this.setState({
            pictures: this.state.pictures.concat(picture),
        })
        console.log( this.state.pictures.concat(picture));
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

          



        <form onSubmit={this.handleSubmit}>
        <br/>
        <br/>
       
        <h5 style={{ color:'#66B3FF' }}>Haftalık Ödülü Güncelle</h5>
        <Form.Group as={Row} >
        <Form.Label  style={{ color:'#66B3FF', fontWeight: 'bold' }} column sm="2">
            Ödül Mesajı:
        </Form.Label>
        <Col sm="10">
            <Form.Control type="text" value={this.state.gift} onChange={this.handleChangeGift} />
        </Col>
        </Form.Group>
        
        
        <ImageUploader
        withIcon={true}
        buttonText='Resim Seç'
        onChange={this.onDrop}
        imgExtension={['.jpg', '.gif', '.png', '.gif']}
        maxFileSize={5242880}
        label=""
        singleImage = {true}
    />
    <Button style={{marginLeft: 100  }} type="submit">Kaydet</Button>
        
      </form>
      
      </div>

      </div>
        );
      }
}
