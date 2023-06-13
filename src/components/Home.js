import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';


export const Home = (props) => {

    const [user, setUser] = useState({});

    return (
        <Navbar expand="lg" >
            <Container style={{ margin: '0px 20px'}}>
                <Navbar.Brand href="#home">Whatsapp</Navbar.Brand>
            </Container>
            <Container style={{margin: '0px 60px '}}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#home">Privacy</Nav.Link>
                        <Nav.Link href="#link">Blog</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <Container style={{ marginLeft: '50px' }}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Button href="#link" style={{marginTop: 10,marginRight: 40, backgroundColor: '#23d366', color: 'black', border:'black', borderRadius: '12px', height:40, width:200, textAlign:'center'}}>Login/Register</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}