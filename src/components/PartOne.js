import React from 'react'
import './topic.css'




export default function PartOne() {
  return (
    <div className="topic">
  
        <h1 style={{ color: '#FFD133 ', textIndent: '30px', paddingTop: '20px', paddingBottom: '1px' }}>NUCSOARA</h1>
        <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'white', marginLeft: '250px', marginTop: '-57px', overflow: 'hidden' }}>
  <img src="penguine.jpeg" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
</div>

<div style={{ position: 'relative', marginLeft: '1000px', marginTop: '-60px' }}>
  <img src="./medicle.jpeg" alt="" style={{ filter: 'blur(4px)', height: '515px', width: '568px' }} />
  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'darkblue' }}>

    <div>
    <p style={{ margin: '0', marginTop: '-240px' }}><b>SRI LANKA</b></p>
    </div>

    <div style={{ marginLeft: '85px', marginTop: '-25px' }}>
      <span role="img" aria-label="map">&#127912;</span>
    </div>
  </div>
</div>


       <div style={{ marginLeft: '-50px' , marginTop: '-420px',}}>
      <h1 className="text" style={{ color: 'darkblue' }}><b>Welcome to Nucsoara (PVT) Ltd </b></h1>
      <p className="texta"><b>Your trusted provider of high-quality medical products in Sri Lanka. At Nucssoara,<br/>We are committed to delivering realiable and efficient solutions for your laboratory<br/>and healthcare needs. with a focus on innovation and customer satisfaction, We<br/>Strive to be Your preferred partner in healthcare diagnostics.</b></p>
      </div>
     
    </div>
  )
}
