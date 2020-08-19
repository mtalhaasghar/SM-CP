import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ViewScheduleTable from './Grid'
import './ViewSchedule.css'
export default class index extends Component {
    
    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col>                        
                            <div className="ViewScheduleTable">
                                <h1>Schedule</h1>
                            </div>
                            <React.Fragment>
                                <ViewScheduleTable/>
                            </React.Fragment>                            
                        </Col>                        
                    </Row>
                </Container>
            </React.Fragment>
                
        )
    }
}
