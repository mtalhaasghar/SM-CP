import React, { Component } from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import ToolBar from '../AdminDashboard/Toolbar/Toolbar'
import SideDrawer from '../AdminDashboard/SideDrawer/SideDrawer'
import BackDrop from '../AdminDashboard/BackDrop/BackDrop'
import StudentTable from './Grid'
import './AddStudent.css'
export default class index extends Component {
    state ={
        sideDrawerOpen: false
    };
    drawerToggleClickHandler = () => {
        this.setState( (prevState) => {
            return{ sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    };
    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false});
    };
    
    render() {
        let backDrop;
        if(this.state.sideDrawerOpen){
            backDrop= <BackDrop click={this.backdropClickHandler}/>
        }
        return (
            <React.Fragment>
                <div style={{height:'100%'}}>
                <ToolBar drawerToggleClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backDrop}                
                </div>
                <Container>
                    <Row>
                        <Col>                        
                            <div className="RegisteredStudentsListTable">
                                <h1>Registered Student List</h1>
                            </div>
                            <React.Fragment>
                                <StudentTable/>
                            </React.Fragment>                            
                        </Col>                        
                    </Row>
                    <Row className="AddStudentButton">
                            <a href ="/LoginAsAdmin" className="btn btn-danger">Add Student</a>
                            </Row>
                </Container>
            </React.Fragment>
                
        )
    }
}
