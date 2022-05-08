import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);
async function render() {
  let Component
  switch (window.location.hash) {
    case "#/about-me":
      Component = (await import('./AboutMe')).default
      break;
    default:
      Component = (await import('./App')).default;
      break; 
  }
  root.render(
    <React.StrictMode>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#/">Home</Nav.Link>
              <Nav.Link href="#/about-me">Sobre Mim</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Component />
    </React.StrictMode>
  )
}
render();
window.addEventListener('hashchange', render)