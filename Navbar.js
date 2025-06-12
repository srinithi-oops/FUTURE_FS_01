import React from 'react';

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: '#333', padding: '10px 20px' }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', margin: 0, padding: 0 }}>
        <li><a href="#home" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Home</a></li>
        <li><a href="#about" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>About</a></li>
        <li><a href="#projects" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Projects</a></li>
        <li><a href="#contact" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Contact</a></li>
      </ul>
    </nav>
  );
}
