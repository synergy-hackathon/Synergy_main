import React from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

function AppNavigation() {
    return <Navbar className="bg-body-tertiary" style={{
        backgroundColor: "rgba(255, 255, 255, 0.75)",
        backdropFilter: "saturate(180%) blur(20px)",
    }}>
        <Container>
            <Navbar.Brand href="/" className="heading">
                <img
                    alt=""
                    src="/Synergy%20Logo.jpg"
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                />{' '}
                Synergy
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#" style={{
                        cursor: "not-allowed",
                    }}>Register</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>;
}

export default AppNavigation;
