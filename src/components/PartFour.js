import React from 'react'
import './partfour.css'
import Card from 'react-bootstrap/Card';

export default function PartFour() {
  return (
    <div className="contact">
      
      <h1><b>CONTACT US</b></h1>
      <div className="contact1">
        <div className="font">
          <div  style={{marginTop: '25px' }}>
          <p style={{ fontSize: '20px' }}><b>For inquiries, orders, or more information about our products and services, please feel free to contact us. <br/>Our dedicated team is here to assist you needs.</b></p>
      </div>
      </div>
      </div>


      <div  style={{marginLeft: '75px',marginTop: '40px' }}>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>

  <Card border="primary" style={{ width: '18rem' }}>
  <Card.Header style={{ color: 'red' }}>EMERGENCY</Card.Header>
    <Card.Body>
      <Card.Title  style={{ color: 'red' }}>+ 94 (777) 549 7341</Card.Title>
      <Card.Title  style={{ color: 'red' }}>+94 (112) 299 229</Card.Title>
      <span role="img" aria-label="call">&#x260E;&#xFE0F;</span>
      
    </Card.Body>
  </Card>

  <Card border="secondary" style={{ width: '18rem' }}>
  <Card.Header style={{ color: 'blue' }}>EMAIL</Card.Header>
    <Card.Body>
      <Card.Title  style={{ color: 'blue' }}>info@nucsoara.org</Card.Title>
      <Card.Title  style={{ color: 'blue' }}>www.nucsoara.org</Card.Title>
      <span role="img" aria-label="email">&#128231;</span>
    </Card.Body>
  </Card>

  <Card border="success" style={{ width: '18rem' }}>
    <Card.Header>LOCATION</Card.Header>
    <Card.Body>
      <Card.Title>No:10,Sadikkakotuwa,</Card.Title>
      <Card.Title>japala watta, Minuwangoda.</Card.Title>
      <span role="img" aria-label="location">&#127912;</span>
      
    </Card.Body>
  </Card>

  <Card border="danger" style={{ width: '18rem' }}>
  <Card.Header style={{ color: 'green' }}>WORKING HOURS</Card.Header>
    <Card.Body>
      <Card.Title  style={{ color: 'green' }}>Mon-Sat 09.00-20.00</Card.Title>
      <Card.Title  style={{ color: 'red' }}>Sunday Emergency</Card.Title>
      <span role="img" aria-label="hours">&#x23F0;&#xFE0F;</span>
      
    </Card.Body>
  </Card>
</div>
</div>
      


    </div>
  )
}
