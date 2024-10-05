import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';




export default function PartTwo() {
  return (
    
    <div className="two">

      <div  style={{ marginLeft: '60px', marginTop: '40px' }}>
      
         <h2 ><b>OUR PRODUCTION</b></h2>

         </div>
         


         <div style={{ marginLeft: '30px', marginTop: '40px' }}>
      <CardGroup>
        <Card style={{ borderRadius: '15px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <img src="./images.jpg.jpg" alt="" />
          <Card.Body>
            <h5>Sterile Urine Container(Red Cap)</h5>
            <div className="carda">
              <Card.Text>
                Our sterile urine containers with red caps are designed to ensure the safe and hygienic collection and storage of urine samples. Containers maintain samples integrity, making them ideal for laboratory testing and diagnostic purposes.
              </Card.Text>
            </div>
          </Card.Body>
          <Card.Footer>
            <Link to="/redcap">
              <Button variant="primary">See Details</Button>
            </Link>
          </Card.Footer>
        </Card>

        <Card style={{ borderRadius: '15px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <img src="./blue.jpg.jpg" alt="" />
          <Card.Body>
            <h5>Non-Sterile Urine Container (Blue Cap)</h5>
            <div className="carda">
              <Card.Text>
                The non-sterile containers with Blue caps offer a cost-effective solution for routine urine sample collection. These durable containers are suitable for various healthcare settings and provide convenience without compromising on quality.
              </Card.Text>
            </div>
          </Card.Body>
          <Card.Footer>
            <Link to="/bluecap">
              <Button variant="primary">See Details</Button>
            </Link>
          </Card.Footer>
        </Card>

        <Card style={{ borderRadius: '15px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <img src="./download (2).jpg.jpg" alt="" />
          <Card.Body>
            <Card.Title>Stool Container</Card.Title>
            <div className="carda">
              <Card.Text>
                Our stool containers are specially designed for the collection and transportation of stool samples. With secure closures and leak-proof design, these containers ensure the integrity of samples during transit and analysis, facilitating accurate diagnostic evaluations.
              </Card.Text>
            </div>
          </Card.Body>
          <Card.Footer>
            <Link to="/Stool">
              <Button variant="primary">See Details</Button>
            </Link>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>





    </div>
    

    
  )
}
