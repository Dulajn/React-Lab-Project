import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { Link } from 'react-router-dom';
import './last.css';

export default function Home() {
  let active = 1;
  let items = [];

  for (let number = 1; number <= 2; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        <Link to={number === 1 ? '/' : '/end'}>{number}</Link>
      </Pagination.Item>
    );
  }

  const paginationBasic = (
    <div className="abc">
      <Pagination>{items}</Pagination>
    </div>
  );

  return (
<div style={{ position: 'relative' }}>
  {/* Display the image and text */}
  <div style={{ position: 'relative', marginBottom: '10px' }}>
    <img src="./health.jpg" alt="" style={{ width: '1350px', height: '490px' }} />
    <div style={{ position: 'absolute', top: '10%', left: '0%', transform: 'translate(0%, -50%)', color: 'white', textAlign: 'left' }}>
      <h1 style={{ color: '#FFD133', fontSize: '48px', fontWeight: 'bold', marginBottom: '20px', textIndent: '50px' }}>NUCSOARA</h1>
    </div>
    <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
      <h1 style={{ color: 'black', fontSize: '72px', fontWeight: 'bold' }}>THANKYOU</h1>
    </div>
    <div style={{ position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
      <h5 style={{ color: 'white', fontSize: '24px', fontWeight: 'normal' }}><b>
        For Choosing Nucsoara(Pvt) Ltd as your Partner in<br/>Healthcare diagnostics</b>
      </h5>
    </div>
  </div>

  {paginationBasic}
</div>
  );
}