import React, { Component } from 'react'
import { Container, Row, Col, Image, Tab, ListGroup } from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import './index.css'
export default class latestMatch extends Component {
    render() {
        return (
            <div className="latestMatch">
                <Container className="ContainerClass">
                    <p>
                        <small class="text-uppercase font-weight-bold">Latest Matches</small>
                    </p>
                    {/* <Row> */}
                        {/* <div className="Match">
                            <ul className="MatchNumbers">
                                <li className="number"><a href="#">MATCH 1</a></li>
                                <li className="number"><a href="#">MATCH 2</a></li>
                                <li className="number"><a href="#">MATCH 3</a></li>
                            </ul>
                        </div> */}
                    {/* </Row> */}
                    <Tab.Container id="list-group-tabs-example" className="Match" defaultActiveKey="#Match1">
                        <ListGroup className="MatchNumbers">
                            <ListGroup.Item action href="#Match1" className="number">
                                Match 1
                            </ListGroup.Item>
                            <ListGroup.Item action href="#Match2" className="number">
                                Match 2
                            </ListGroup.Item>
                            <ListGroup.Item action href="#Match3" className="number">
                                Match 3
                            </ListGroup.Item>
                        </ListGroup>
                        <Tab.Content>
                            <Tab.Pane eventKey="#Match1">
                                 <div className="Animation">
                                <div className="block1">
                                    <Row>
                                        <Col md="4" className="leftTeam">
                                            <div class="d-block d-lg-flex align-item-center">
                                                <Image src={img1} roundedCircle/>
                                                <div className="Text">
                                                <h5>BsIT</h5>
                                                <span className="sub">Old</span>
                                                </div>
                                            </div>                              
                                        </Col>
                                        <Col md="4" className="Matches">
                                        <h3>2:2</h3>
                                        </Col>
                                        <Col md="4" className="rightTeam">
                                            <div className="image">
                                                <Image src={img2} roundedCircle/>
                                            </div>
                                            <div className="Text">
                                                <h5>Zoology</h5>
                                                <span className="sub">Old</span>
                                            </div>                  
                                        </Col>
                                    </Row>
                            </div>
                                <div className="block2">
                                    <Row>    
                                        <Col md="4" className="leftTeam">
                                            <div class="d-block d-lg-flex align-item-center">
                                                <Image src={img1} roundedCircle/>
                                                <div className="Text">
                                                    <h5>BsIT</h5>
                                                    <span className="sub">Old</span>
                                                </div>
                                            </div>                              
                                        </Col>
                                        <Col md="4" className="Matches">
                                            <h3>2:2</h3>
                                        </Col>
                                        <Col md="4" className="rightTeam">
                                            <div className="image">
                                                <Image src={img2} roundedCircle/>
                                            </div>
                                            <div className="Text">
                                                <h5>Zoology</h5>
                                                <span className="sub">Old</span>
                                            </div>                  
                                        </Col>
                                    </Row>
                                </div>
                                <div className="block3">
                                    <Row>    
                                        <Col md="4" className="leftTeam">
                                            <div class="d-block d-lg-flex align-item-center">
                                                <Image src={img1} roundedCircle/>
                                                <div className="Text">
                                                    <h5>BsIT</h5>
                                                    <span className="sub">Old</span>
                                                </div>
                                            </div>                              
                                        </Col>
                                        <Col md="4" className="Matches">
                                            <h3>2:2</h3>
                                        </Col>
                                        <Col md="4" className="rightTeam">
                                            <div className="image">
                                                <Image src={img2} roundedCircle/>
                                            </div>
                                            <div className="Text">
                                                <h5>Zoology</h5>
                                                <span className="sub">Old</span>
                                            </div>                  
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#Match2">
                                 <div className="Animation">
                                <div className="block1">
                                    <Row>
                                        <Col md="4" className="leftTeam">
                                            <div class="d-block d-lg-flex align-item-center">
                                                <Image src={img1} roundedCircle/>
                                                <div className="Text">
                                                <h5>Hello</h5>
                                                <span className="sub">Old</span>
                                                </div>
                                            </div>                              
                                        </Col>
                                        <Col md="4" className="Matches">
                                        <h3>2:2</h3>
                                        </Col>
                                        <Col md="4" className="rightTeam">
                                            <div className="image">
                                                <Image src={img2} roundedCircle/>
                                            </div>
                                            <div className="Text">
                                                <h5>Zoology</h5>
                                                <span className="sub">Old</span>
                                            </div>                  
                                        </Col>
                                    </Row>
                            </div>
                                <div className="block2">
                                    <Row>    
                                        <Col md="4" className="leftTeam">
                                            <div class="d-block d-lg-flex align-item-center">
                                                <Image src={img1} roundedCircle/>
                                                <div className="Text">
                                                    <h5>BsIT</h5>
                                                    <span className="sub">Old</span>
                                                </div>
                                            </div>                              
                                        </Col>
                                        <Col md="4" className="Matches">
                                            <h3>2:2</h3>
                                        </Col>
                                        <Col md="4" className="rightTeam">
                                            <div className="image">
                                                <Image src={img2} roundedCircle/>
                                            </div>
                                            <div className="Text">
                                                <h5>Zoology</h5>
                                                <span className="sub">Old</span>
                                            </div>                  
                                        </Col>
                                    </Row>
                                </div>
                                <div className="block3">
                                    <Row>    
                                        <Col md="4" className="leftTeam">
                                            <div class="d-block d-lg-flex align-item-center">
                                                <Image src={img1} roundedCircle/>
                                                <div className="Text">
                                                    <h5>BsIT</h5>
                                                    <span className="sub">Old</span>
                                                </div>
                                            </div>                              
                                        </Col>
                                        <Col md="4" className="Matches">
                                            <h3>2:2</h3>
                                        </Col>
                                        <Col md="4" className="rightTeam">
                                            <div className="image">
                                                <Image src={img2} roundedCircle/>
                                            </div>
                                            <div className="Text">
                                                <h5>Zoology</h5>
                                                <span className="sub">Old</span>
                                            </div>                  
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#Match3">
                                 <div className="Animation">
                                <div className="block1">
                                    <Row>
                                        <Col md="4" className="leftTeam">
                                            <div class="d-block d-lg-flex align-item-center">
                                                <Image src={img1} roundedCircle/>
                                                <div className="Text">
                                                <h5>BsIT</h5>
                                                <span className="sub">Old</span>
                                                </div>
                                            </div>                              
                                        </Col>
                                        <Col md="4" className="Matches">
                                        <h3>2:2</h3>
                                        </Col>
                                        <Col md="4" className="rightTeam">
                                            <div className="image">
                                                <Image src={img2} roundedCircle/>
                                            </div>
                                            <div className="Text">
                                                <h5>Zoology</h5>
                                                <span className="sub">Old</span>
                                            </div>                  
                                        </Col>
                                    </Row>
                            </div>
                                <div className="block2">
                                    <Row>    
                                        <Col md="4" className="leftTeam">
                                            <div class="d-block d-lg-flex align-item-center">
                                                <Image src={img1} roundedCircle/>
                                                <div className="Text">
                                                    <h5>BsIT</h5>
                                                    <span className="sub">Old</span>
                                                </div>
                                            </div>                              
                                        </Col>
                                        <Col md="4" className="Matches">
                                            <h3>2:2</h3>
                                        </Col>
                                        <Col md="4" className="rightTeam">
                                            <div className="image">
                                                <Image src={img2} roundedCircle/>
                                            </div>
                                            <div className="Text">
                                                <h5>Zoology</h5>
                                                <span className="sub">Old</span>
                                            </div>                  
                                        </Col>
                                    </Row>
                                </div>
                                <div className="block3">
                                    <Row>    
                                        <Col md="4" className="leftTeam">
                                            <div class="d-block d-lg-flex align-item-center">
                                                <Image src={img1} roundedCircle/>
                                                <div className="Text">
                                                    <h5>BsIT</h5>
                                                    <span className="sub">Old</span>
                                                </div>
                                            </div>                              
                                        </Col>
                                        <Col md="4" className="Matches">
                                            <h3>2:2</h3>
                                        </Col>
                                        <Col md="4" className="rightTeam">
                                            <div className="image">
                                                <Image src={img2} roundedCircle/>
                                            </div>
                                            <div className="Text">
                                                <h5>Zoology</h5>
                                                <span className="sub">Old</span>
                                            </div>                  
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>                       
                        {/* <div className="Animation">
                                <div className="block1">
                                    <Row>
                                        <Col md="4" className="leftTeam">
                                            <div class="d-block d-lg-flex align-item-center">
                                                <Image src={img1} roundedCircle/>
                                                <div className="Text">
                                                <h5>BsIT</h5>
                                                <span className="sub">Old</span>
                                                </div>
                                            </div>                              
                                        </Col>
                                        <Col md="4" className="Matches">
                                        <h3>2:2</h3>
                                        </Col>
                                        <Col md="4" className="rightTeam">
                                            <div className="image">
                                                <Image src={img2} roundedCircle/>
                                            </div>
                                            <div className="Text">
                                                <h5>Zoology</h5>
                                                <span className="sub">Old</span>
                                            </div>                  
                                        </Col>
                                    </Row>
                            </div>
                                <div className="block2">
                                    <Row>    
                                        <Col md="4" className="leftTeam">
                                            <div class="d-block d-lg-flex align-item-center">
                                                <Image src={img1} roundedCircle/>
                                                <div className="Text">
                                                    <h5>BsIT</h5>
                                                    <span className="sub">Old</span>
                                                </div>
                                            </div>                              
                                        </Col>
                                        <Col md="4" className="Matches">
                                            <h3>2:2</h3>
                                        </Col>
                                        <Col md="4" className="rightTeam">
                                            <div className="image">
                                                <Image src={img2} roundedCircle/>
                                            </div>
                                            <div className="Text">
                                                <h5>Zoology</h5>
                                                <span className="sub">Old</span>
                                            </div>                  
                                        </Col>
                                    </Row>
                                </div>
                                <div className="block3">
                                    <Row>    
                                        <Col md="4" className="leftTeam">
                                            <div class="d-block d-lg-flex align-item-center">
                                                <Image src={img1} roundedCircle/>
                                                <div className="Text">
                                                    <h5>BsIT</h5>
                                                    <span className="sub">Old</span>
                                                </div>
                                            </div>                              
                                        </Col>
                                        <Col md="4" className="Matches">
                                            <h3>2:2</h3>
                                        </Col>
                                        <Col md="4" className="rightTeam">
                                            <div className="image">
                                                <Image src={img2} roundedCircle/>
                                            </div>
                                            <div className="Text">
                                                <h5>Zoology</h5>
                                                <span className="sub">Old</span>
                                            </div>                  
                                        </Col>
                                    </Row>
                                </div>
                            </div> */}
               </Container>
            </div> 
        )
    }
}
