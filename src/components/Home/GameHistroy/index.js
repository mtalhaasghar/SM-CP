
import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap'
import img1 from './img4.jpg'
import img2 from './img5.jpg'
import img3 from './img6.jpg'
import './index.css'
export default class GameHistory extends Component {
    render() {
        return (
            <div className="Main">
                <div className="background">
                    <div className="overlaySection">
                        <Container>
                            <Row ClassName="firstOverlayRow">
                                <Col md="12" className="Heading">
                                    <h1 className="HeadingText">Game History</h1>
                                </Col>
                            </Row>
                            <Row className="secondRow">
                                <Col md="4" className="cards">
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={img1} />
                                        <Card.Body>
                                            <Card.Title>Spring Festival 2018</Card.Title>
                                            <Card.Text>
                                            Details of the sports event given all the scores and performance in the event above.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md="4" className="cards">
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={img2} />
                                        <Card.Body>
                                            <Card.Title>Sports festival 2017</Card.Title>
                                            <Card.Text>
                                                Details of the sports event given all the scores and performance in the event above.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>                                
                                <Col md="4" className="cards">
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={img3} />
                                        <Card.Body>
                                            <Card.Title>Sports gala 2016</Card.Title>
                                            <Card.Text>
                                            Details of the sports event given all the scores and performance in the event above.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>    
        )
    }
}
