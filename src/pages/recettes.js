import React from "react";
import { MDBRow, MDBContainer, MDBCol, MDBCard, MDBIcon, MDBBtn } from "mdbreact";
import './index.css';



const ProjectsPage = () => {
  return (
    <section className='text-center my-5'>
      <h2 className='h1-responsive font-weight-bold my-5'>Nos Meilleurs Recettes</h2>
      <p className='grey-text w-responsive mx-auto mb-5'>
      Quelque soit votre idée, vous trouverez forcément parmi nos meilleures recettes de quoi réaliser le menu idéal pour régaler vos proches.
      </p>
      <MDBContainer >

        <MDBRow>
          <MDBCol md='12' className='mb-4'>
            <MDBCard
              className='card-image bg'
              
            >
              <div className='text-white text-center d-flex flex-column align-items-center rgba-black-light py-5 px-4 rounded'>
                <h6 className='white-text'>
                  
                  <strong> Travel</strong>
                </h6>
                <h3 className='py-3 font-weight-bold'>
                  <strong>This is card title</strong>
                </h3>
                <p className='pb-3'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellat fugiat, laboriosam, voluptatem, optio vero odio nam sit
                  officia accusamus minus error nisi architecto nulla ipsum
                  dignissimos. Odit sed qui, dolorum!
              </p>
                <MDBBtn color='secondary' rounded size='md'>
                  <MDBIcon far icon='clone' className='left' /> MDBView project
              </MDBBtn>
              </div>
            </MDBCard>
          </MDBCol>
          <MDBCol md='6' className='md-0 mb-4'>
            <MDBCard
              className='card-image bg2'
              
            >
              <div className='text-white text-center  d-flex align-items-center rgba-black-light py-5 px-4 rounded'>
                <div>
                  <h6 className='white-text'>
                  
                    <strong> Marketing</strong>
                  </h6>
                  <h3 className='py-3 font-weight-bold'>
                    <strong>This is card title</strong>
                  </h3>
                  <p className='pb-3'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Repellat fugiat, laboriosam, voluptatem, optio vero odio nam
                    sit officia accusamus minus error nisi architecto nulla ipsum
                    dignissimos. Odit sed qui, dolorum!
                </p>
                  <MDBBtn color='pink' rounded size='md'>
                    <MDBIcon far icon='clone' className='left' /> MDBView project
                </MDBBtn>
                </div>
              </div>
            </MDBCard>
          </MDBCol>
          <MDBCol md='6' className='md-0 mb-4'>
            <MDBCard
              className='card-image bg3'
            
            >
              <div className='text-white text-center d-flex align-items-center rgba-black-light py-5 px-4 rounded'>
                <div>
                  <h6 className='white-text'>
                   
                    <strong> Entertainment</strong>
                  </h6>
                  <h3 className='py-3 font-weight-bold'>
                    <strong>This is card title</strong>
                  </h3>
                  <p className='pb-3'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Repellat fugiat, laboriosam, voluptatem, optio vero odio nam
                    sit officia accusamus minus error nisi architecto nulla ipsum
                    dignissimos. Odit sed qui, dolorum!
                </p>
                  <MDBBtn color='success' rounded size='md'>
                    <MDBIcon far icon='clone' className='left' /> MDBView project
                </MDBBtn>
                </div>
              </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>   </MDBContainer>
    </section>


  );
}

export default ProjectsPage;