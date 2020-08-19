import React, { Component } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css'
import img1 from './image1.png'
import img2 from './image2.png'
import img3 from './image3.jpg'
import img4 from './image4.jpg'
import './index.css'

export default class nextMatch extends Component {
    render() {
        return (
            <div className="nextMatch mt-5">
                <Container>
                <div className="nextMatchContent">
                    <Row>
                        <Col md="6" className="text-left">
                            <div className="timeDropDown">
                                <p>
                                <span className="heading">Next Match</span> 
                                <span className="brightFigure">12</span>weeks 
                                <span className="brightFigure">02</span>days 
                                <span className="brightFigure">12</span>hrs 
                                <span className="brightFigure">20</span>min 
                                <span className="brightFigure">10</span>sec 
                                </p>
                            </div>
                        </Col>
                        <Col md="6" className="text-center">
                            <div className="teams">
                                <span className="teamOne" >
                                    <Image src={img1} roundedCircle />
                                    IT Team
                                </span>
                                <span className="vs">VS</span>
                                <span className="teamtwo" >
                                    <Image src={img2} roundedCircle />
                                    Zoology Team
                                </span>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="background">       
                <div className="overlaySection">           
                <Row className="secondRow">
                    <div className="row2col1">
                    <Col md="12" className="leftTeam">
                            <div className="team1">
                                <div className="team1">
                                    <Image src={img3} roundedCircle /> 
                                </div>
                                <div className="team1Text">
                                    <h3 className="h5 mb-0 text-black">BsIT</h3>
                                    <span className="team1Dep">Information Technology</span>
                                </div>
                           </div>      
                    </Col>
                    </div>
                    <Col md="4" className="middle">                        
                        <div className="current">
                            <p>
                                <small class="text-uppercase text-black font-weight-bold">Final Match — T20</small>
                            </p>
                                <div class="bg-black py-2 px-4 mb-2 text-white d-inline-block rounded">
                                    <span class="h3">2:2</span>
                                </div>
                                    <p class="mb-0">
                                        <small class="text-uppercase text-black font-weight-bold">10-12-2019 / 12:30 PM</small>
                                    </p>
                        </div>                    
                    </Col>
                    <div className="row2col2">
                    <Col md="12" className="rightTeam">
                            <div className="team2">
                                <div className="team2">
                                    <Image src={img4} roundedCircle /> 
                                </div>
                                <div className="team2Text">
                                    <h3 className="h5 mb-0 text-black">BsZoology</h3>
                                    <span className="team2Dep">Science</span>
                                </div>
                           </div>      
                    </Col>
                    </div>
                </Row>
                </div>
                </div>
                </Container>
                
            </div>
        )
    }
}
    /* <div className="recent">
               <Container>
                   <Row>
                       <Col md="6" className="scores">
                           <h1 className="category">Cricket</h1>
                           <ul className="list">
                               <li className="listItems"><h6>Wining Team</h6></li>
                               <li className="listItems"><h6>Losing Team</h6></li>
                           </ul>
                           <ul className="pointList">
                               <li className="points"><h1>50</h1></li>
                               <li className="points"><h1>37</h1></li>
                           </ul>
                           <ul className="pointsCategoryList">
                               <li className= "PointCategory"><p>runs</p></li>
                               <li className= "PointCategory"><p>runs</p></li>
                           </ul>
                       </Col>
                       <Col md="6" className="Teams">
                           <h3>Teams</h3>
                       <ul className="team">
                           <li className="teamsNames"><h3>BsIT</h3></li>
                           <li className="teamsNames"><h3>Bs Zoology</h3></li>
                       </ul>
                       <ul className="teamsLogo">
                           <li className="logo"><img  src={img1} /></li>
                           <li className="logo"><img  src={img2} /></li>
                       </ul>
                       </Col>
                   </Row>
                   </Container> 
            </div> 
            '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
              
            */