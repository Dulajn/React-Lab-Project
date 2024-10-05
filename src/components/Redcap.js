import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './redcap.css'




export default function Redcap() {
  return (
    <div className="redcap">
    {/* Link to the Home page */}
    <div style={{ display: 'inline-block', borderRight: '1px solid black', paddingRight: '20px', paddingLeft: '30px', marginBottom: '20px' }}>
      <Link to="/" style={{ marginBottom: '10px' }}>Home</Link>
    </div>
    

    <div style={{ position: 'relative', marginLeft: '900px', marginTop: '-45px' }}>
  <img src="/images.jpg.jpg" alt="" style={{ filter: 'blur(4px)', height: '570px', width: '500px' }} />
  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'darkblue' }}>
    </div>
    </div>

 <div>
 <h1 style={{color:"darkblue", marginLeft: '85px', marginTop: '-515px' }}><b>Sterile Urine Container(Red Cap)</b></h1>
 </div>

 <div style={{ marginTop: '60px', marginLeft: '80px', fontSize: '21px' }}>
  <p>Our sterile urine containers with red caps are designed to ensure the safe  and hygienic<br/> collection and storage of urine samples. Containers maintain samples integrity.making <br/> them ideal for laboratory testing and diagnostic purposes.</p>
</div>





  </div>

  )
}
