import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';

import PartOne from './components/PartOne';
import PartTwo from './components/PartTwo';
import PartThree from './components/PartThree';
import PartFour from './components/PartFour';
import Home from './components/Home';
import End from './components/End';
import Redcap from './components/Redcap';
import Bluecap from './components/Bluecap';
import Stool from './components/Stool';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar expand="lg" className="bg-primary">
  <Container fluid>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
        <NavDropdown title="Nucsoara(pvt)Ltd" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3"></NavDropdown.Item>
          <NavDropdown.Item href="#action4"></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">open in editor</NavDropdown.Item>
        </NavDropdown>
        <Button variant="outline-success">Share prototype</Button>
      </Nav>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <Form className="d-flex">
        <div className="input-group">
          <Form.Control
            type="search"
            placeholder="What we can help you find "
            className="form-control me-" // Adjust margin-right here
            style={{ width: '230px' }}
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <span className="input-group-text" id="basic-addon2">
            <span role="img" aria-label="search">&#128269;</span>
          </span>
        </div>
        <NavDropdown title="Options" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3"></NavDropdown.Item>
          <NavDropdown.Item href="#action4"></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">Actual size (100%)</NavDropdown.Item>
          <NavDropdown.Item href="#action6">Fit to screen</NavDropdown.Item>
          <NavDropdown.Item href="#action7">Fit width</NavDropdown.Item>
          <NavDropdown.Item href="#action8">Fit Screen</NavDropdown.Item>
        </NavDropdown>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>

        <Routes>
          <Route
            path="/"
            element={
              <div>
              
                <PartOne />
                <PartTwo />
                <PartThree />
                <PartFour />
                <Home />
             
             
              </div>
            }
          />
          <Route path="/end" element={<End />} />
          <Route path="/Redcap" element={<Redcap />} />
          <Route path="/Bluecap" element={<Bluecap />} />
          <Route path="/Stool" element={<Stool />} />
          
          
       
            
        </Routes>
      </div>
    </Router>
  );
}

export default App;