import React, { Component } from 'react'
import {Container ,Row, Col} from 'react-bootstrap'
import './AddEvent.css'
import 'font-awesome/css/font-awesome.min.css'
export default class Details extends Component {
    render() {
        return (
            <div className="AddEventContent">
                <Container>
                    <Row>
                        <Col md="12">
                            <div>                                
                                <form action="/action_page.php">                                 
                                    <div class="form-group">
                                        <label for="EventName">Event Name:</label>
                                        <input type="text" class="form-control"/> 
                                    </div>                 
                                        <label for="AddEventPhoto">Add Photo*</label>                                                                                                                                                          
                                    <div className="ButtonAddEvent"> 
                                    <input class="btn btn-primary  btn-block" 
                                    type="file" 
                                    onChange={this.fileSelectHandler}/>
                                    <button class="btn btn-primary  btn-block" onClick={this.UlpoadFileHandler}>Upload</button>
                                    </div>                                     
                                    <div class="form-group">
                                        <label for="Description">Description:</label>
                                        <textarea name="Message" id="Message" class="form-control" /> 
                                    </div>
                                    <div className="ButtonAddEvent"> 
                                    <a href ="/LoginAsAdmin" className="btn btn-danger">Add Event</a>
                                    </div>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>                
            </div>
        )
    }
}
