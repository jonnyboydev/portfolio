import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to='/'>
        <h1>Jonathan Clark</h1>
      </Link>
    </header>
  );
}
