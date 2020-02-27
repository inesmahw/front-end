import React, { Component } from 'react';

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBFooter, MDBContainer, MDBRow, MDBCol

} from 'mdbreact';

import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import logo from './assets/logo-06.png';
import './style.css';

class App extends Component {
  state = {
    modal8: false,
    modal9: false
  }

  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  state = {
    collapseID: ''
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''

    }));

  closeCollapse = collID => () => {
    const { collapseID } = this.state;
    window.scrollTo(0, 0);
    collapseID === collID && this.setState({ collapseID: '' });
  };

  render() {
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'transparent' }}
        onClick={this.toggleCollapse('mainNavbarCollapse')}
      />
    );

    const { collapseID } = this.state;

    return (<>
      <Router>
        <div className='flyout'>
          <MDBNavbar color="white-color" light expand='md' fixed='top' scrolling>


            <MDBNavbarToggler
              onClick={this.toggleCollapse('mainNavbarCollapse')}
            />
            <MDBCollapse id='mainNavbarCollapse' isOpen={collapseID} navbar>
              <MDBNavbarNav >
                <MDBNavItem >
                  <MDBNavLink
                    exact
                    to='/'
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                  >
                    <strong className="link"> Accueil </strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                    to='/Produits'
                  >
                    <strong className="link"> Nos Produits </strong>
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          
            <MDBCollapse id='mainNavbarCollapse' isOpen={collapseID} navbar>
              <MDBNavbarNav >

                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                    to='/recettes'
                  >
                    <strong className="link">Recettes</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                    to='/bienfaits'
                  >
                    <strong className="link">Bienfaits</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                    to='/contact'
                  >
                    <strong className="link">Contact</strong>
                  </MDBNavLink>
                </MDBNavItem>


              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
          {collapseID && overlay}
          <main style={{ marginTop: '5rem' }}>
            <Routes />
          </main>

        </div>

      </Router>
      <MDBFooter color="light-green" className="font-small pt-0">
        <MDBContainer>
          <MDBRow className="pt-5 mb-3 text-center d-flex justify-content-center">
            <MDBCol md="2" className="b-3">
              <h6 className="title font-weight-bold">
                About us
              </h6>
            </MDBCol>
            <MDBCol md="2" className="b-3">
              <h6 className="title font-weight-bold">
                Products
              </h6>
            </MDBCol>
            <MDBCol md="2" className="b-3">
              <h6 className="title font-weight-bold">
                Awards
              </h6>
            </MDBCol>
            <MDBCol md="2" className="b-3">
              <h6 className="title font-weight-bold">
                Help
              </h6>
            </MDBCol>
            <MDBCol md="2" className="b-3">
              <h6 className="title font-weight-bold">
                Contact
              </h6>
            </MDBCol>
          </MDBRow>
          <hr className="rgba-white-light" style={{ margin: "0 15%" }} />
          <MDBRow className="d-flex text-center justify-content-center mb-md-0 mb-4">
            <MDBCol md="8" sm="12" className="mt-5">
              <p style={{ lineHeight: "1.7rem" }}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur.
           </p>
            </MDBCol>
          </MDBRow>
          <hr className="clearfix d-md-none rgba-white-light" style={{ margin: "10% 15% 5%" }} />
       
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:
         <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
          </MDBContainer>
        </div>
      </MDBFooter>  </>
    );
  }
}

export default App;
