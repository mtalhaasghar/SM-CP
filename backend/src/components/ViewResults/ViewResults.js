import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import * as ReactBootStrap from 'react-bootstrap'
import './ViewResults.css'
export default class index extends Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col>
                            <div className="ResultTable">
                                <h1>Results</h1>
                                <ReactBootStrap.Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Event Name</th>
                                            <th>Date</th>
                                            <th>Time</th>
                                            <th>Match</th>
                                            <th>Match No.</th>
                                            <th>Team 1 Name</th>
                                            <th>Team 1 scores</th>
                                            <th>Team 2 Name</th>
                                            <th>Team 2 scores</th>
                                            <th>wining Team</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>2020 sports festival</td>
                                            <td>10/12/2020</td>
                                            <td>12:00PM</td>
                                            <td>Cricket</td>
                                            <td>Match 1</td>
                                            <td>Bs Zoology</td>
                                            <td>180 Runs</td>
                                            <td>Bs Chemistry</td>
                                            <td>230 Runs</td>
                                            <td>Bs Chemistry</td>
                                        </tr>
                                        <tr>
                                            <td>2020 sports festival</td>
                                            <td>10/12/2020</td>
                                            <td>12:00PM</td>
                                            <td>Kushti</td>
                                            <td>Match 2</td>
                                            <td>Bs Math</td>
                                            <td>2 round</td>
                                            <td>Bs IT</td>                                            
                                            <td>1 round</td>
                                            <td>Bs Math</td>
                                        </tr>
                                        <tr>
                                            <td>2020 sports festival</td>
                                            <td>10/12/2020</td>
                                            <td>1:30PM</td>
                                            <td>Football</td>
                                            <td>Match 4</td>
                                            <td>Bs Math</td>
                                            <td>2 Points</td>
                                            <td>B Ed</td>
                                            <td>3 Points</td>
                                            <td>B Ed</td>
                                        </tr>
                                    </tbody>
                                </ReactBootStrap.Table>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
                
        )
    }
}
