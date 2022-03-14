import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import chalDalIcon from '../../../images/icon/logo-small.webp'

const Header = () => {
    return (
        <div>
            {/* <Navbar  variant="dark"> */}

            <Navbar style={{ backgroundColor: '#FDD670', height: '55px' }} collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><img
                        alt=""
                        src={chalDalIcon}
                        width="154px"
                        height="40"
                        className="d-inline-block align-top"
                    /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;