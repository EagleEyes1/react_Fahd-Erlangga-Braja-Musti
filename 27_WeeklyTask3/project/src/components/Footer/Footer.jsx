import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import InputGroup from 'react-bootstrap/InputGroup';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import styles from "../Footer/Footer.module.css"

const Footer = () => {
    return (
        <>
            <Container fluid className={styles.blockfooter}>
                <Row className={styles.rowfooter}>
                    <Col lg={3} sm={3}>
                        <h2 style={{ fontWeight: "bolder", fontSize: "20px", paddingBottom: "40px" }}>Join 16,000+ people who get our web marketing tips twice a month</h2>
                        <Stack direction="horizontal" gap={4} className={styles.columnone}>
                            <InputGroup style={{
                                backgroundColor: "#ffffff",
                                borderRadius: "30px",
                                padding: "2px"
                            }}>
                                <Form.Control style={{
                                    borderRadius: "30px",
                                    border: "0"
                                }} type="email" placeholder='Email Address' />
                                <InputGroup.Text
                                    style=
                                    {{
                                        backgroundColor: "#bb5b47",
                                        color: "#ffffff",
                                        borderRadius: "30px"
                                    }}>Sign me up</InputGroup.Text>
                            </InputGroup>
                        </Stack>
                        <div className='mb-3'>By signing up you agree to our <span style={{ color: "#bb5b47" }}>Privacy Policy</span></div>
                        <Stack direction="horizontal" gap={3} className={styles.icons}>
                            <div>
                                <Image src={require("../../assets/facebook-app-symbol.png")} alt="logo" fluid className={styles.logo} />
                            </div>
                            <div>
                                <Image src={require("../../assets/twitter.png")} alt="logo" fluid className={styles.logo} />
                            </div>
                            <div>
                                <Image src={require("../../assets/linkedin.png")} alt="logo" fluid className={styles.logo} />
                            </div>
                        </Stack>
                    </Col>
                    <Col lg={5} sm={5} style={{ fontSize: "13px", paddingLeft: "120px" }}>
                        <Stack direction="horizontal" gap={5}>
                            <div style={{ textAlign: "center", paddingBottom: "120px" }}>
                                <h4 style={{ fontWeight: "bold" }}>
                                    Certified
                                </h4>
                                <div>
                                    <Image src={require("../../assets/bold.png")} alt="logo" className={styles.corp} />
                                </div>
                                <div className={styles.line}></div>
                                <h5>
                                    Corporation
                                </h5>
                            </div>
                            <div>
                                <h4 style={{ fontWeight: "bold" }}>
                                    Chicago Community Member
                                </h4>
                                <div style={{ fontSize: "19px" }}>
                                    We strive to educate and collaborate with like-minded businesses to make
                                    a difference environtmentally and socially. Together we can make an impact.
                                </div>
                                <h5 style={{ color: "#bb5b47", fontWeight: "bold", marginTop: "30px" }}>
                                    Learn About Our BCorp Values
                                </h5>
                            </div>
                        </Stack>
                    </Col>
                    <Col lg={3} sm={3} style={{ paddingLeft: "160px" }}>
                        <div>
                            <h5 style={{ fontWeight: "bold" }}>
                                Come Say Hello!
                            </h5>
                            <div>
                                <div>
                                    4003 N
                                </div>
                                <div>
                                    Ravenswood Ave
                                </div>
                                <div>
                                    Suite 316
                                </div>
                                <div>
                                    Chicago, IL, 60613
                                </div>
                                <div style={{
                                    color: "#bb5b47",
                                }}>
                                    (773) 348-4581
                                </div>
                                <Button style={{
                                    marginTop: "20px",
                                    backgroundColor: "#bb5b47",
                                    color: "#ffffff",
                                    borderRadius: "30px",
                                    padding: "7px 25px 7px 25px"
                                }} variant="primary">Contact <Image style={{
                                    width: "20px",
                                    height: "20px"
                                }} src={require("../../assets/paper-plane.png")} alt="logo" /></Button>
                            </div>
                        </div>
                        {/* <Image src={require("../../assets/icons/btn_download.png")} alt="download" fluid /> */}
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row style={{ justifyContent: "center", padding: "1em", backgroundColor: "#0d0d0d", color: "#525252" }}>
                    <Col lg={5} >
                        <Stack direction="horizontal" gap={2}>
                            <div>
                                Privacy Policy •
                            </div>
                            <div>
                                Sitemap •
                            </div>
                            <div>
                                Support •
                            </div>
                            <div>
                                © 2020 Orbit Media Studios
                            </div>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Footer