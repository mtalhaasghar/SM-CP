import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ToolBar from '../AdminDashboard/Toolbar/Toolbar'
import SideDrawer from '../AdminDashboard/SideDrawer/SideDrawer'
import BackDrop from '../AdminDashboard/BackDrop/BackDrop'
import TeacherTable from '../RemoveTeacher/Grid'
import './ViewTeacher.css'
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
                            <div className="AddedTeacherListTable">
                                <h1>Added Teacher List</h1>
                                <p>Select one Teacher from the list whose profile you want to see.</p>
                            </div>
                            <React.Fragment>
                                <TeacherTable/>
                            </React.Fragment>                            
                        </Col>                        
                    </Row>
                    <Row className="ViewTeacherButton">
                            <a href ="/TeacherProfileAsAdmin" className="btn btn-danger">View Teacher Profile</a>
                            </Row>
                </Container>
            </React.Fragment>
                
        )
    }
}
