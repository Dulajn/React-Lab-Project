
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './stool.css'


export default function Bluecap() {
  return (
    
    <div className="stool">
    {/* Link to the Home page */}
    <div style={{ display: 'inline-block', borderRight: '1px solid black', paddingRight: '20px', paddingLeft: '30px', marginBottom: '20px' }}>
      <Link to="/" style={{ marginBottom: '10px' }}>Home</Link>
    </div>
  


    <div style={{ position: 'relative', marginLeft: '900px', marginTop: '-45px' }}>
  <img src="./download (2).jpg.jpg" alt="" style={{ filter: 'blur(4px)', height: '570px', width: '500px' }} />
  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'darkblue' }}>
    </div>
    </div>

 <div>
 <h1 style={{color:"darkblue", marginLeft: '165px', marginTop: '-515px' }}><b>Stool Container</b></h1>
 </div>

 <div style={{ marginTop: '60px', marginLeft: '80px', fontSize: '21px' }}>
  <p>Our stool containers are specially designed for the collection andtransportation<br/> of stool samples. with  secure closures and leak-proof design, these containers <br/>ensure the integrity of samples during transit and analysis,  facilitating accurate<br/> diagnostic evaluations.</p>
</div>


















  </div>





  )
}
