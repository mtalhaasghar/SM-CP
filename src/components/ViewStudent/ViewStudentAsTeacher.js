import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import StudentTable from '../RemoveStudent/Grid'
import './ViewStudent.css'
export default class index extends Component {
    
    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col>                        
                            <div className="AddedStudentsListTable">
                                <h1>Added Student List</h1>
                                <p>Select one student from the list whose profile you want to see.</p>
                            </div>
                            <React.Fragment>
                                <StudentTable/>
                            </React.Fragment>                            
                        </Col>                        
                    </Row>
                    <Row className="ViewStudentButton">
                            <a href ="/ViewStudentProfileAsTeacher" className="btn btn-danger">View Student Profile</a>
                            </Row>
                </Container>
            </React.Fragment>
                
        )
    }
}
