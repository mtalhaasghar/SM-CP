import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css'
import img1 from './image1.jpg'
import img2 from './image2.jpg'
import img3 from './image3.jpg'
import './index.css'
export default class upcomingMatches extends Component {
    render() {
        return (
            <div className="new-Matches mt-5">
                <Container>  
                <Row>
                    <Col md="4" className="left-image">
                        <div className="post">
                            <img  src={img1}  alt="description"/>
                            <div className="post-s">
                                <p>
                                    <span className="heading">DG Khan</span>
                                    The university of education is doing the best performance in the sports field also as in the education. Many sports Rising stars are herby have the oppurtuniy now in the university of education!
                                    <span className="button">
                                        <a href ="/Readmore1" className="btn btn-danger">Read more</a>
                                    </span>
                                </p>

                            </div>
                        </div>
                    </Col>
                    <Col md="4" className="middle-image">
                        <div className="post">
                            <img  src={img2}  alt="description"/>
                            <div className="post-s">
                            <p>
                                <span className="heading">
                                    DG Khan
                                </span>
                                The university of education is doing the best performance in the sports field also as in the education. Many sports Rising stars are herby have the oppurtuniy now in the university of education!
                                <span className="button">
                                    <a href ="/Readmore2" className="btn btn-danger">Read more</a>
                                </span>
                            </p>
                            </div>
                        </div>
                    </Col>  
                    <Col md="4" className="right-image">
                        <div className="post">
                            <img  src={img3} alt="description"/>
                            <div className="post-s">
                            <p><span className="heading">DG Khan</span>The university of education is doing the best performance in the sports field also as in the education. Many sports Rising stars are herby have the oppurtuniy now in the university of education!<span className="button">
                                <a href ="/Readmore3" className="btn btn-danger">Read more</a></span></p> 
                            </div>
                        </div>
                    </Col>  
                      {/* <Col md="4" className="midle-image">
                      <img className="image2" src={img2} />
                      <h2 className="para2">Hover</h2> 
                      </Col>  
                      <Col md="4" className="right-image">
                      <img className="image3" src={img3} />
                      <h2 className="para3">Hover</h2> 
                      </Col> */}
                </Row>
                
                </Container>
            </div>
        )
    }
}
