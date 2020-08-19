import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css'
import img1 from './image1.png'
import img2 from './image2.png'
import './index.css'
export default class index extends Component {
    render() {
        return (
        <div className="recent">
            <Container>
                <Row className="row1">
                    <Col md="12" className="Category">
                        <div className="sportsName">
                            <h2>Cricket</h2>
                            <h4>Current Scores</h4>
                        </div>
                    </Col>
                </Row>
                <Row className="row2">
                    <Col md="6" className="left">
                        <div className="teamLogo">
                            <img src={img1} alt="Team Logo"/>
                        </div>
                        <div className="Team">
                            <h3 className="teamName">IT</h3>
                            <h5 className="points">59</h5>
                            <p>
                            <span className="scoreType">Runs</span>
                            </p>                                                  
                        </div>
                    </Col>
                    <Col md="6" ClassName="right"> 
                        <div className="teamLogo">
                            <img src={img2} alt="Team Logo"/>
                        </div>
                        <div className="Team">
                            <h3 className="teamName">Zoology</h3>
                            <h5 className="points">30</h5>
                            <p>
                            <span className="scoreType">Runs</span>
                            </p>
                        </div>
                    
                    </Col>
                </Row>
            </Container> 
        </div>
        )
    }
}
