import React from 'react';
import { Container, Row, Col, ListGroup, Image } from 'react-bootstrap';
export const HomePage= () =>{
    // before login
    return (

        <Container>
            <Row>
                <Col>
                    <ListGroup>
                        <ListGroup.Item>Welcome to Grow</ListGroup.Item>
                        <ListGroup.Item>The one place you need to keep track of your garden</ListGroup.Item>
                        <ListGroup.Item>We all have goals</ListGroup.Item>
                        <ListGroup.Item>Let us get there together</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col>
                    <Image></Image>
                </Col>
            </Row>
        </Container>
    )
}