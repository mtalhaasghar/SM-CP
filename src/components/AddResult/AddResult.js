import React, { Component } from 'react'
import {Container ,Row, Col, Dropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './AddResult.css'
import 'font-awesome/css/font-awesome.min.css'
export default class AddResult extends Component {
    render() {
        return (
            <div className="AddResultsContent">
                <Container>
                    <Row>
                        <Col md="12">
                            <div>                                
                                <form action="/action_page.php">                                 
                                    <div class="form-group">
                                        <label for="EventName">Event Name:</label>
                                        <input type="text" class="form-control"/> 
                                    </div>
                                    <div class="form-group">
                                        <label for="EventName">Student Name:</label>
                                        <input type="text" class="form-control"/> 
                                    </div>
                                    <div class="form-group">
                                        <label for="EventName">Match no.:</label>
                                        <input type="number" class="form-control"/> 
                                    </div>
                                    <div class="form-group">                                                                               
                                        <Dropdown type="input">
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                              Sports Category
                                              </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">Cricker</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">footBall</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">waliball</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">TableTenis</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">Hockey</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">Badminton</Dropdown.Item>
                                                </Dropdown.Menu>
                                        </Dropdown>
                                        <Dropdown type="input">
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                              Marks Category
                                              </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">Runs</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Points</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">rounds</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">scores</Dropdown.Item>
                                                </Dropdown.Menu>
                                        </Dropdown>                                            
                                    </div>                                
                                    <div class="form-group">
                                        <label for="EventName">Scores:</label>
                                        <input type="number" class="form-control"/> 
                                    </div>                                                                          
                                </form>                                
                            </div>
                            <Link to="/AddResult" className="btn btn-primary">Add</Link>
                        </Col>
                    </Row>
                </Container>                
            </div>
        )
    }
}
