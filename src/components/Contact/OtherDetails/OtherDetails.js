import React, { Component } from 'react'
import {Container ,Row, Col} from 'react-bootstrap'

import 'font-awesome/css/font-awesome.min.css'
import './index.css'
export default class Details extends Component {
    render() {
        return (
            <div className="ContactOtherDetails">
                <Container>
                    <Row>
                        <Col md= "7" className="Mailing">
                            <div className="MailingBackgrounnd">
                                <div className="Name">                                                                    
                                        <form action="/action_page.php">
                                            <Row>
                                            <Col md="6" className="FirstName">
                                            <div class="form-group">
                                                <label for="FistName">First Name:</label>
                                                <input type="text" class="form-control"/>
                                            </div>
                                            </Col>
                                            <Col md="6" className="LastName">
                                            <div class="form-group">
                                                <label for="LastName">Last Name:</label>
                                                <input type="text" class="form-control"/>
                                            </div>
                                            </Col>
                                            </Row>
                                        </form>                   
                                </div>
                                <form action="/action_page.php">
                                    <div class="form-group">
                                        <label for="email">Email address:</label>
                                        <input type="email" class="form-control" id="email"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="Subject">Subject:</label>
                                        <input type="text" class="form-control"/>
                                    </div>                                     
                                    <div class="form-group">
                                        <label for="Message">Message:</label>
                                        <textarea name="Message" id="Message" class="form-control" /> 
                                    </div> 
                                    <button type="submit" class="btn btn-primary btn-lg btn-block">Submit</button>
                                </form>
                            </div>
                        </Col>
                        <Col md="5" className="ContactDetails">
                            <div ClassName="Address">
                                <h4>Address</h4>
                                <h5>University of Education, College road, Samnabad, Faislabad</h5>
                            </div>
                            <div ClassName="Phone">
                                <h4>Phone</h4>
                                <a href="/LoginAsAdmin">+923214479052</a>
                            </div>
                            <div ClassName="Email">
                                <h4>Email</h4>
                                <a href="https://www.ue.edu.pk/">university_of_education@ue.edu.pk</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
                
            </div>
        )
    }
}
