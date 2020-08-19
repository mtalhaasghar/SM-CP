import React, { Component } from 'react'
import {Container ,Row, Col} from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css'
import {Link} from 'react-router-dom'
import './index.css'
export default class Details extends Component {
    render() {
        return (
            <div className="Compose">
                <Container>
                    <Row>
                        <Col md="3"></Col>
                        <Col md= "6" className="Mailing">
                            <h3>Compose New Email</h3>
                            <div className="MailingBackgrounnd">
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
                                    <Link to='/LoginAsAdmin'>
                                    <button type="submit" class="btn btn-primary btn-lg btn-block">Submit</button>
                                    </Link>
                                </form>
                            </div>
                        </Col>
                        <Col md="3"></Col>
                    </Row>
                </Container>
                
            </div>
        )
    }
}
