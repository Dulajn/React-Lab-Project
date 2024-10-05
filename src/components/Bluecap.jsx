import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './bluecap.css'





export default function Redcap() {
  return (
    <div className="bluecap">
    {/* Link to the Home page */}
    <div style={{ display: 'inline-block', borderRight: '1px solid black', paddingRight: '20px', paddingLeft: '30px', marginBottom: '20px' }}>
      <Link to="/" style={{ marginBottom: '10px' }}>Home</Link>
    </div>
    
    


    <div style={{ position: 'relative', marginLeft: '900px', marginTop: '-45px' }}>
  <img src="./blue.jpg.jpg" alt="" style={{ filter: 'blur(4px)', height: '570px', width: '500px' }} />
  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'darkblue' }}>
    </div>
    </div>

 <div>
 <h1 style={{color:"darkblue", marginLeft: '85px', marginTop: '-515px' }}><b>Non-Sterile Urine Container (Blue Cap)</b></h1>
 </div>

 <div style={{ marginTop: '60px', marginLeft: '80px', fontSize: '21px' }}>
  <p> The non-sterile containers with Blue caps offer a cost-effective solution for<br/> routine urine sample collection. these  durable containers are suitable for<br/>  various healthcare settings and provide   convenience without compromising<br/> on quality</p>
</div>






  </div>

  )
}
