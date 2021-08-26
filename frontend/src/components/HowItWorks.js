import React from 'react'
import {Row, Col, Container}  from 'react-bootstrap';

function HowItWorks() {
    return (
        <Container fluid style={{backgroundColor:'white'}}>

            <Row>

                <Col>
                <h1>how does it work?</h1>
                <p>paragraph</p>
                </Col>

            </Row>
            <Row>
                <Col>1</Col>
                <Col>2</Col>
                <Col>3</Col>
                <Col>4</Col>
                
                </Row>
                <Row>
                    <Col>
                    <button> </button>
                    <h1> you can edit your preference anytime</h1>
                    
                    </Col>
                
                </Row>
            
        </Container>
    )
}

export default HowItWorks
