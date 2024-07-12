import React from "react";
import {Container, Navbar} from "react-bootstrap";

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
        </Container>
    </Navbar>;
}

export default AppNavigation;
