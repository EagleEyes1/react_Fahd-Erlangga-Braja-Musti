import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from "../Form/Form.module.css"

const Forms = () => {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        comment: "",
    })

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setState({
            ...state,
            [name]: value,
        })
        console.log(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state)
        if (state.firstName && state.lastName && state.email && state.comment) {

            // const newData = {
            //     firstName: state.firstName,
            //     lastName: state.lastName,
            //     email: state.email,
            //     comment: state.comment,
            // }
            // addNewPassenger(newData)
            alert(`
            Username : ${state.firstName} ${state.lastName}
            Email : ${state.email}
            Comment : ${state.comment}
            `)
            setState({
                ...state,
                firstName: "",
                lastName: "",
                email: "",
                comment: "",
            })
        }
        else {
            alert("Data masih ada yang kosong")
        }
    }
    return (
        <Container fluid>
            <Row style={{ justifyContent: "center", paddingTop: "130px" }}>
                <Col lg={5}>
                    <h2 style={{ fontWeight: "bolder", paddingBottom: "40px" }}>Contact Us</h2>
                    <div style={{ paddingRight: "130px" }}>
                        Need to get touch with us? Either fill out the form with your
                        inquiry or find the <a href='#'>department email</a> you'd like to contact below
                    </div>
                </Col>
                <Col lg={4}>
                    <Form>
                        <Stack direction="horizontal" gap={4}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>First name*</Form.Label>
                                <Form.Control value={state.firstName} name="firstName" type="text" onChange={onChange} className={styles.forms} required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control value={state.lastName} name="lastName" type="text" onChange={onChange} className={styles.forms} />
                            </Form.Group>
                        </Stack>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email*</Form.Label>
                            <Form.Control value={state.email} name="email" type="email" onChange={onChange} className={styles.forms} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>What can we help you with?</Form.Label>
                            <Form.Control
                                name="comment"
                                value={state.comment}
                                onChange={onChange}
                                as="textarea"
                                style={{ height: '100px' }}
                            />
                        </Form.Group>
                        <Button onClick={handleSubmit} style={{ backgroundColor: "#4b32b0", border: "0", padding: "7px 25px 7px 25px" }} variant="primary">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Forms