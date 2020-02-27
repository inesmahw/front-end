import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBLink } from 'mdbreact';
import {
  MDBCard, MDBCardTitle,
  MDBBtn, MDBCardImage, MDBCardText, MDBCardBody, MDBJumbotron
} from "mdbreact";
import './index.css';
import axios from 'axios';

import img from '../assets/photo/1.jpg';
import img1 from '../assets/photo/2.jpg';
import img2 from '../assets/photo/3.jpg';
import img3 from '../assets/photo/4.jpg';
import img4 from '../assets/photo/5.jpg';
import img5 from '../assets/photo/6.jpg';
class PillsPage extends Component {
 
  state = {

    products: [],
  };

  componentDidMount(){
      axios.get(`http://127.0.0.1:8001/api/products.json`)
      .then(res => {
        const products = res.data;
        this.setState({ products });
      })
  };

  render() {

    return (
      <>
      <MDBContainer>
        <MDBRow>
          <MDBCol md='12'>
          { this.state.products.map(product =>
                    <MDBCard key={product.id}>
                      <MDBCardImage className="img-fluid" src={ product.image }
                        waves />
                      <MDBCardBody>
                        <MDBCardTitle>{product.name}</MDBCardTitle>
                        <MDBCardText>{product.description} | {product.price} TND </MDBCardText>
                        <MDBBtn href="#">Click</MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                       )}
        
          </MDBCol>
        </MDBRow>
      </MDBContainer>   
      </>
    );
  }
}

export default PillsPage;