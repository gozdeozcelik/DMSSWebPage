import React, { Component } from 'react'
import ReactTable from "react-table";
import ListGroup from 'react-bootstrap/ListGroup';
import "react-table/react-table.css"
import Nav from 'react-bootstrap/Nav';

import logo from './images/b.png'
class Table extends Component {
  constructor(props){
    super(props);
    this.state = {
        items:[],
        isLoaded:false,
        image:''
    }
}

    
componentDidMount(){
  fetch("http://192.168.43.165:8086/results")
      .then(res=> res.json())
      .then(json => {
          this.setState({
              isLoaded:true,
              items:json.results,
          })
          
      });
      
}
render (){
  var myStyle = {
      fontSize: 15,
      color: '#cc0000'
   }
  var{ isLoaded, items} =this.state;
  if(!isLoaded){
      return <div>Yükleniyor...</div>
  }
  else{
      return(
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
                    <div>
                    <br/>
                    
                        
                    <ListGroup  className="mx-4" style={{ width: "35rem" }} >
                    <h5 className="mx-4" style = {myStyle}> Kayıtlı Bölgeler:</h5>
                    {items.map(item => (
                        <ListGroup.Item variant="info" key ={items.id}>
                        {item }
                        </ListGroup.Item>
                    ))}
                    
                    </ListGroup>
                </div>
          
          </div>


         

          

      )
  }

}
}

export default Table;

/*
duygu:
componentDidMount(){
  fetch("http://192.168.43.165:8086/results")
      .then(res=> res.json())
      .then(json => {
          this.setState({
              isLoaded:true,
              items:json.results,
          })
          
      });
      
}

*/

/*
evde çalışan:

    
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

