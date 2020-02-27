import React, { Component } from "react";
import { MDBMask, MDBRow, MDBCol, MDBBtn, MDBView, MDBContainer } from "mdbreact";
import { MDBCard, MDBCardBody, MDBIcon, MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem } from "mdbreact";
import { MDBCardImage, MDBBadge } from "mdbreact";

import img from '../assets/photo/bannier2.jpg';
import img3 from '../assets/photo/bannier3.jpg';
import img1 from '../assets/photo/810.jpg';
import img2 from '../assets/photo/162.jpg';
import img4 from '../assets/photo/123.jpg';
import img5 from '../assets/photo/124.jpg';
import img6 from '../assets/photo/125.jpg';
import img7 from '../assets/photo/43.jpg';
import img8 from '../assets/photo/44.jpg';
import img9 from '../assets/photo/45.jpg';
import img10 from '../assets/photo/46.jpg';
class MinimalisticIntro extends Component {

  render() {

    return (
      <>

        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={img}
                  alt="First slide"
                />

              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h3-responsive">Light mask</h3>
                <p>First text</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={img}
                  alt="Second slide"
                />

              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h3-responsive">Strong mask</h3>
                <p>Second text</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={img3}
                  alt="Third slide"
                />

              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h3-responsive">Slight Mast</h3>
                <p>Third text</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
        <main>

          <MDBCard className="my-5 px-5 pb-5">
            <MDBCardBody className="text-center">
              <h2 className="h1-responsive font-weight-bold text-center my-5">
                Nos Catégories
        </h2>
              <p className="text-center w-responsive mx-auto mb-5">
              Nos principales catégories sont comme suit..
              Visitez notre magasin . Plusieurs produits en exclusivité Vente en détails .
        </p>
              <MDBRow>
              <MDBCol lg="3" md="12" className="mb-lg-0 mb-4">
                  <MDBView hover className="rounded z-depth-2 mb-4" waves>
                    <img
                      className="img-fluid"
                      src={img10}
                      alt=""
                    />
                    <MDBMask overlay="white-slight" />
                  </MDBView>
                  <a href="#!" className="text-warning">
                    <h6 className="font-weight-bold mb-3">
                      <MDBIcon icon="fire" className="pr-2" />
                     Huile D'olive 
              </h6>
                  </a>
                  <h4 className="font-weight-bold mb-3">
                    <strong>Extra vierge</strong>
                  </h4>
                  <p>
                    by <b className="font-weight-bold light-green-text">Rivière D'or</b>
                  </p>
                  <p className="dark-grey-text">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui ratione.
            </p>
                  <MDBBtn  className="btn btn-light-green btn-rounded" rounded size="md">
                    Savoir plus
            </MDBBtn>
                </MDBCol>
                <MDBCol lg="3" md="12" className="mb-lg-0 mb-4">
                  <MDBView hover className="rounded z-depth-2 mb-4" waves>
                    <img
                      className="img-fluid"
                      src={img8}
                      alt=""
                    />
                    <MDBMask overlay="white-slight" />
                  </MDBView>
                  <a href="#!" className="text-warning">
                    <h6 className="font-weight-bold mb-3">
                      <MDBIcon icon="fire" className="pr-2" />
                     Huile D'olive 
              </h6>
                  </a>
                  <h4 className="font-weight-bold mb-3">
                    <strong>Collection premimum</strong>
                  </h4>
                  <p>
                    by <b className="font-weight-bold amber-text">Rivière D'or</b>
                  </p>
                  <p className="dark-grey-text">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui ratione.
            </p>
                  <MDBBtn className="btn btn-amber " rounded size="md">
                    Savoir plus
            </MDBBtn>
                </MDBCol>
                <MDBCol lg="3" md="12" className="mb-lg-0 mb-4">
                  <MDBView hover className="rounded z-depth-2 mb-4" waves>
                    <img
                      className="img-fluid"
                      src={img9}
                      alt=""
                    />
                    <MDBMask overlay="white-slight" />
                  </MDBView>
                  <a href="#!" className="text-warning">
                    <h6 className="font-weight-bold mb-3">
                      <MDBIcon icon="fire" className="pr-2" />
                     Huile D'olive 
              </h6>
                  </a>
                  <h4 className="font-weight-bold mb-3">
                    <strong>Collection Bio</strong>
                  </h4>
                  <p>
                    by <b className="font-weight-bold light-blue-text">Rivière D'or</b>
                  </p>
                  <p className="dark-grey-text">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui ratione.
            </p>
                  <MDBBtn className="btn btn-light-blue"rounded size="md">
                    Savoir plus
            </MDBBtn>
                </MDBCol>
                <MDBCol lg="3" md="12" className="mb-lg-0 mb-4">
                  <MDBView hover className="rounded z-depth-2 mb-4" waves>
                    <img
                      className="img-fluid"
                      src={img10}
                      alt=""
                    />
                    <MDBMask overlay="white-slight" />
                  </MDBView>
                  <a href="#!" className="text-warning">
                    <h6 className="font-weight-bold mb-3">
                      <MDBIcon icon="fire" className="pr-2" />
                     Huile D'olive 
              </h6>
                  </a>
                  <h4 className="font-weight-bold mb-3">
                    <strong>Les Saveurs</strong>
                  </h4>
                  <p>
                    by <b className="font-weight-bold pink-text">Rivière D'or</b>
                  </p>
                  <p className="dark-grey-text">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui ratione.
            </p>
                  <MDBBtn className="btn btn-pink" rounded size="md">
                    Savoir plus
            </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>











          <MDBContainer fluid>

            <section className="text-center my-5">
              <h2 className="h1-responsive font-weight-bold text-center my-5">
                Our bestsellers
</h2>
              <p className="grey-text text-center w-responsive mx-auto mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                error amet numquam iure provident voluptate esse quasi, veritatis
                totam voluptas nostrum quisquam eum porro a pariatur veniam.
</p>
              <MDBRow>
                <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                  <MDBCard className="align-items-center">
                    <MDBCardImage
                      src={img4}
                      top
                      alt="sample photo"
                      overlay="white-slight"
                    />
                    <MDBCardBody className="text-center">
                      <a href="#!" className="grey-text">
                        <h5>Shirt</h5>
                      </a>
                      <h5>
                        <strong>
                          <a href="#!" className="dark-grey-text">
                            Denim shirt{" "}
                            <MDBBadge pill color="danger">
                              NEW
        </MDBBadge>
                          </a>
                        </strong>
                      </h5>
                      <h4 className="font-weight-bold blue-text">
                        <strong>120$</strong>
                      </h4>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                  <MDBCard className="align-items-center">
                    <MDBCardImage
                      src={img4}
                      top
                      alt="sample photo"
                      overlay="white-slight"
                    />
                    <MDBCardBody className="text-center">
                      <a href="#!" className="grey-text">
                        <h5>Sport wear</h5>
                      </a>
                      <h5>
                        <strong>
                          <a href="#!" className="dark-grey-text">
                            Sweatshirt
      </a>
                        </strong>
                      </h5>
                      <h4 className="font-weight-bold blue-text">
                        <strong>139$</strong>
                      </h4>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                  <MDBCard className="align-items-center">
                    <MDBCardImage
                      src={img6}
                      top
                      alt="sample photo"
                      overlay="white-slight"
                    />
                    <MDBCardBody className="text-center">
                      <a href="#!" className="grey-text">
                        <h5>Sport wear</h5>
                      </a>
                      <h5>
                        <strong>
                          <a href="#!" className="dark-grey-text">
                            Grey blouse{" "}
                            <MDBBadge pill color="primary">
                              BEST
        </MDBBadge>
                          </a>
                        </strong>
                      </h5>
                      <h4 className="font-weight-bold blue-text">
                        <strong>99$</strong>
                      </h4>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                  <MDBCard className="align-items-center">
                    <MDBCardImage
                      src={img5}
                      top
                      alt="sample photo"
                      overlay="white-slight"
                    />
                    <MDBCardBody className="text-center">
                      <a href="#!" className="grey-text">
                        <h5>Outwear</h5>
                      </a>
                      <h5>
                        <strong>
                          <a href="#!" className="dark-grey-text">
                            Black jacket
      </a>
                        </strong>
                      </h5>
                      <h4 className="font-weight-bold blue-text">
                        <strong>219$</strong>
                      </h4>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </section>

          </MDBContainer>



        </main>
      </>
    );
  }
}

export default MinimalisticIntro;

