import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import axios, {post} from 'axios'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
class SubmitComponent extends Component{
    
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
              const url = "http://192.168.43.165:8086/file";
              const data={email:"ozcgozd"}
              const formData={file:e.target.result}
             
              this.setState({formDatas:e.target.result})
             
          }

      }
      componentDidMount(){
        fetch("http://192.168.43.165:8086/regions")
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
        console.log('Bölge', this.state.region)
        console.log('Tür', this.state.type)
        event.preventDefault();
        const url = "http://192.168.43.165:8086/regions";
        console.log("gönderilen region", this.state.region)
        console.log("gönderilen type", this.state.type)
        
        const data={"region":this.state.region, 
            "type": this.state.type , "dataform": this.state.formDatas
        }

        return post(url,data)
            .then(response => console.warn("result",response))

      }
    
      render() {
        var myStyle = {
          fontSize: 15,
          color: '#cc0000'
       }
      var{ isLoaded, items} =this.state;

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
          <div style={{display: 'flex'}}>

              

          <ListGroup  className="mx-4" style={{ width: "35rem" }} >
          <h5 className="mx-4" > Kayıtlı Bölgeler:</h5>
          {items.map(item => (
              <ListGroup.Item variant="info" key ={items.id}>
              {item.region }
              </ListGroup.Item>
          ))}
          </ListGroup>


        <form onSubmit={this.handleSubmit}>
        <br/>
        <br/>
        <br/>
        <br/>
        <h5 className="" > Yeni Bölge Ekle</h5>
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
        <i className = "fas fa-plus-circle" ></i>
        <input type="file" name ="file" onChange={(e) => this.onChange(e)} />


        
        <Button type="submit">Kaydet</Button>
        
      </form>
      </div>

      </div>
        );
      }
}
export default SubmitComponent;


/*
duyguyla çalışan 
 componentDidMount(){
        fetch("http://192.168.43.165:8086/file")
            .then(res=> res.json())
            .then(json => {
                this.setState({
                    isLoaded:true,
                    items:json.user,
                })
                
            });
            
    }

    */

    /*
  çaışan ::

      componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res=> res.json())
            .then(json => {
                this.setState({
                    isLoaded:true,
                    items:json,
                })
                
            });
            
    }

    */