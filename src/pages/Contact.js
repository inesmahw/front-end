import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";

const ContactPage = () => {
  return (
    <section className="my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
      Contactez-nous
      </h2>
      <p className="text-center w-responsive mx-auto pb-5">
      Si vous souhaitez entrer en contact avec l'équipe de 
      rédaction du site www.handball.tn, il vous suffit d'envoyer un message ci-dessous.
      </p>
      <MDBRow>
        <MDBCol lg="5" className="lg-0 mb-4">
          <MDBCard>
            <MDBCardBody>
              <div  >
                <h3 className="mt-2" color="light-blue">
                  <MDBIcon icon="envelope" /> Écrivez-nous:
                </h3>
              </div>
              <p className="dark-grey-text">
              Nous écrirons rarement, mais seulement le meilleur contenu.
              </p>
              <div className="md-form">
                <MDBInput
                  icon="user"
                  label="Votre nom"
                  iconClass="grey-text"
                  type="text"
                  id="form-name"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="envelope"
                  label="Votre email"
                  iconClass="grey-text"
                  type="text"
                  id="form-email"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="tag"
                  label="Sujet"
                  iconClass="grey-text"
                  type="text"
                  id="form-subject"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="pencil-alt"
                  label="Message"
                  iconClass="grey-text"
                  type="textarea"
                  id="form-text"
                />
              </div>
              <div className="text-center">
                <MDBBtn color="light-blue">Envoyer</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="7">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
          >
              <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3245.549373108134!2d10.869646714674024!3d35.564829843955444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13021a39dda67061%3A0x7ef56e4ea4bbc34a!2sHuilerie%20LOUED!5e0!3m2!1sfr!2stn!4v1581509953670!5m2!1sfr!2stn" 
              >
                
              
           </iframe>
           
          </div>
          <br />
          <MDBRow className="text-center">
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="map-marker-alt" />
              </MDBBtn>
              <p>Tunis, 2092</p>
              <p className="mb-md-0">Tunisia</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="phone" />
              </MDBBtn>
              <p>+ 216 71 000 012</p>
              <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="envelope" />
              </MDBBtn>
              <p>handb@gmail.com</p>
              <p className="mb-md-0">handb@gmail.com</p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </section>
  );
}

export default ContactPage;