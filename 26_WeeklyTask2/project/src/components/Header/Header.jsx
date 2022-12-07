import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { useNavigate, redirect } from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import styles from "../Header/Header.module.css"

const Header = () => {
    const navigate = useNavigate();

    return (
        <>
            <Container fluid className={styles.navbar}>
                <Row>
                    <Col lg={12}>
                        <Navbar expand="lg">
                            <Navbar.Brand className={styles.fontcolor} style={{ paddingLeft: "50px" }} href="#home">Website Logo</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav" className={styles.navcol}>
                                <Nav>
                                    <Nav.Link onClick={() => navigate("/")} className={styles.fontcolor} href="">Home</Nav.Link>
                                    <Nav.Link className={styles.fontcolor} href="">Products</Nav.Link>
                                    <Nav.Link onClick={() => navigate("/about")} className={styles.fontcolor} href="">About</Nav.Link>
                                    <Nav.Link onClick={() => navigate("/contact")} className={styles.fontcolor} href="">Contacts</Nav.Link>
                                    <NavDropdown id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                    <Row style={{ justifyContent: "center", textAlign: "center", paddingTop: "100px" }}>
                        <Col lg={8}>
                            <h1>
                                WELCOME TO OUR WEBSITE
                            </h1>
                            <p>
                                Lorem Ipsum dolor sit amet, consectetuer
                            </p>
                            <Button style={{ padding: "5px 35px 5px 35px", backgroundColor: "#6abdbf", border: "0" }} variant="primary">JOIN NOW</Button>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </>
    )
}

export default Header