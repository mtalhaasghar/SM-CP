import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
export default class index extends Component {
    render() {
            return (         
                <div className="news">
                    <Container>
                        <div className="heading">
                            <Row>
                                <Col md="12" className="text">
                                    <h3>Latest News</h3>                                                            
                                </Col>
                            </Row>
                        </div>
                        <Row className="cardAlign">
                            <Col md="4" className="news1">
                                <div className="shadow">
                                    <Card style={{ width: '20rem' }}>                                        
                                        <div className="inner">                                           
                                            <Card.Img variant="top" src={img1} />
                                        </div>
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col md="4" className="news1">
                                <div className="shadow">
                                    <Card style={{ width: '20rem' }}>
                                        <div className="inner">                                           
                                            <Card.Img variant="top" src={img2} />
                                        </div>
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col md="4" className="news1">
                                <div className="shadow">
                                    <Card style={{ width: '20rem' }}>
                                        <div className="inner">                                           
                                            <Card.Img variant="top" src={img3} />
                                        </div>
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            )
        }
}
