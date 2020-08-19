import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Chart from './chart'
import './TeacherProfile.css'
export default class index extends Component {
    render() {
      
        return (
            <React.Fragment>                
                <Container>
                    <Row>
                        <Col>
                        <h3>Teacher Profile</h3>
                            <div>
                                <div className="TeacherProfile">
                                    <div>
                                        <img style={{width:"160px", height:"160px", borderRadius:"80px"}} 
                                        src="https://images.unsplash.com/photo-1550927407-50e2bd128b81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                                        alt="profile"/>
                                    </div>
                                    <div>
                                        <h4>Bilal Raza</h4>
                                        <div className="TeacherProfileDetails">
                                            <Link to="#"><h6>bsf1601493@ue.edu.pk</h6></Link>
                                            <Link to="#"><h6>03224479053</h6></Link>
                                        </div>
                                        <div>
                                            <h6>Password:</h6>
                                                                                
                                        <div class="input-container">
                                            <input type="password" defaultValue="Password" />
                                            <i class="material-icons visibility">visibility_off</i>
                                        </div>
                                        
                                        <div className="TeacherSportsDetails">
                                            <div>
                                                <h6>Field of sports:</h6>
                                                <h5>Kushti</h5>
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
                    
                    <Row className="TeacherPerformanceGrapgh">
                        <Col>
                        <div class="card shadow mb-4">
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary">Cricket Chart</h6>
                            </div>
                            <div class="card-body">
                                <div class="chart-area">                               
                                    <Chart/>                                    
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