import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { Link } from 'react-router-dom';
import './home.css';

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
    <div className="number">
      <Pagination>{items}</Pagination>
      <br />
    </div>
  );

  return (
    <div>
      
      {paginationBasic}
    </div>
  );
}