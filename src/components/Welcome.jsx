import { Avatar } from '@mui/material'
import React from 'react'
import { Button, ButtonGroup, Card, Col, Container, Image, Row, Stack } from 'react-bootstrap'

const Welcome = () => {
  return (
    <Container className='py-5'>
    <Row className='d-flex justify-content-between  '>
      <Col xs={12} sm={6} md={6} lg={6} 
            className='d-flex flex-column justify-content-center align-items-center ml-3'>
        <h1>Discover, collect,  and charity in extraordinary NFT marketplace</h1>
        <h4>In aenean posuere lorem risus nec. Tempor tincidunt aenean purus purus vestibulum nibh mi venenatis</h4>
        <Stack direction='horizental'>
        <Button variant="outline-success">CREATE</Button>            
        <Button variant="outline-success">SIGN IN</Button>
        </Stack>
      </Col>
      <Col xs={12} sm={6} md={6} lg={6}>
      <Card style={{ width: '22rem' }}>
        <Card.Img variant="top" src="/Group.png" width={"350px"} rounded />
        
        </Card>
      </Col>
    </Row>
  </Container>
  )
}

export default Welcome
