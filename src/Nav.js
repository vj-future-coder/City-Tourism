import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './AlignmentExample.css';

function AlignmentExample() {
  return (
    <>
      <Nav className="justify-content-center p-2 bg-dark text-light custom-nav" activeKey="/home">
        <div className="logo p-2">City Tourism</div>
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Tour plans</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default AlignmentExample;
