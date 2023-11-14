import { Facebook, GitHub, Instagram } from '@mui/icons-material'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <Container className='p-3'>
    <Row>
      <Col>
        <h3>Etiam et id tincidunt faucibus mollis a sociis pretium fermentum quis magna faucibus lacus.</h3>
      </Col>  
      <Col>
      <div className='d-flex justify-content-center flex-column p-2'>
        <h3>Marketplace</h3>
        <p>Home</p>
        <p>Activity</p>
        <p>Discover</p>
        <p>Learn More</p>
      </div>
      </Col>
      <Col>
      <div className='d-flex justify-content-center flex-column p-2'>
        <h3>Company</h3>
        <p>Home</p>
        <p>Activity</p>
        <p>Discover</p>
        <p>Learn More</p>
      </div>
      </Col>
        <Col>
      <div className='d-flex justify-content-center flex-column p-2'>
        <h3>Contact</h3>
        <p>Home</p>
        <p>Activity</p>
        <p>Discover</p>
        <p>Learn More</p>
      </div>
        </Col>
    </Row>

        <hr/>

        <Row>
            <Col>
                <GitHub/>
                <Instagram/>
                <Facebook/>
            </Col>
            <Col>
            <h4>Copyright @2023 EAD</h4>
            </Col>
        </Row>
    </Container>
  )
}

export default Footer
