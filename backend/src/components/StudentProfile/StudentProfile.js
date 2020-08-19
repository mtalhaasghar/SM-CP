import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Chart1 from './chart1'
import Chart2 from './chart2'
import './StudentProfile.css'
export default class index extends Component {
    render() {
        
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col className="StudentProfileBorder">
                        <h3>Student Profile</h3>
                            <div className="StudentProfileBorder">
                                <div className="StudentProfile">
                                    <div>
                                        <img style={{width:"160px", height:"160px", borderRadius:"80px"}} 
                                        src="https://images.unsplash.com/photo-1550927407-50e2bd128b81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                                        alt="Student Profile"/>
                                        <h3>Profile Photo</h3>
                                    </div>
                                    <div>
                                        <h4>Noman Afzal</h4>
                                        <div className="StudentProfileDetails">
                                            <Link to="#"><h6>bsf1601522@ue.edu.pk</h6></Link>
                                            <Link to="#"><h6>03224479053</h6></Link>
                                        </div>
                                        <div>
                                            <h6>Password:</h6>                                                                                
                                        <div class="input-container">
                                            <input type="password" defaultValue="Password" />
                                            <i class="material-icons visibility">visibility_off</i>
                                        </div>
                                        <div className="StudentSportsDetails">
                                            <div>
                                                <h6>Field of sports:</h6>
                                                <h5>Cricket, TableTenis</h5>
                                            </div>
                                            <div>
                                                <h6>Category:</h6>
                                                <h5>Batsman, General</h5>
                                            </div>
                                            <div>
                                                <h6>Department:</h6>
                                                <h5>Bs Information Technology</h5>
                                            </div>
                                        </div>
                                        </div>                                        
                                    </div>
                                </div>
                            </div>                            
                        </Col>                     
                    </Row>
                    <Row className="StudentPerformanceGrapgh">
                        <Col md="6">
                        <div class="card shadow mb-4">
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary">Cricket Chart</h6>
                            </div>
                            <div class="card-body">
                                <div class="chart-area">                               
                                    <Chart1/>                                    
                                </div>                  
                            </div>
                        </div>
                        </Col> 
                        <Col md="6">
                        <div class="card shadow mb-4">
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary">TableTenis Chart</h6>
                            </div>
                            <div class="card-body">
                                <div class="chart-area">
                                    <Chart2/>
                                </div>                  
                            </div>
                        </div>
                        </Col>   
                    </Row>                 
                </Container>              
            </React.Fragment>
                
        )
    }
}