import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import styles from "./AboutUs.module.css"

const AboutUs = () => {
    return (
        <>
            <Container fluid className={styles.title}>
                <Row>
                    <Col lg={5}>
                        <h1>About us</h1>
                    </Col>
                </Row>
            </Container>
            <Container fluid className={styles.content}>
                <Row style={{ justifyContent: "center", alignItems: "center" }}>
                    <Col lg={8} style={{ justifyContent: "center", alignItems: "center" }}>
                        <div className={styles.picture}>
                            <Image src={require("../../assets/photos.jpg")} alt="logo" fluid className={styles.photo} />
                        </div>
                        <div className={styles.paragraph}>
                            We're a fully distributed team of SS people Wog and working in 15 commas around the world. And we working to build the best products to help our customers build their brands and grow thew businesses on social media.
                        </div>
                        <div className={styles.paragraph}>
                            We're always aimed to do things a little differently at Buffer. Since the early days, we've had a focus on budding one of the most unique and fulfilling workplaces by rethinking a lot of traditional practices.
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AboutUs