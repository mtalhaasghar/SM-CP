import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ToolBar from '../AdminDashboard/Toolbar/Toolbar'
import SideDrawer from '../AdminDashboard/SideDrawer/SideDrawer'
import BackDrop from '../AdminDashboard/BackDrop/BackDrop'
import TeacherTable from './Grid'
import './AddTeacher.css'
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
                            <div className="RegisteredTeacehrsListTable">
                                <h1>Registered Teacher List</h1>
                            </div>
                            <React.Fragment>
                                <TeacherTable/>
                            </React.Fragment>                            
                        </Col>                        
                    </Row>
                    <Row className="AddTeacherButton">
                            <a href ="/AddTeacherModal" className="btn btn-danger">Add Teacher in</a>
                            </Row>
                </Container>
            </React.Fragment>
                
        )
    }
}
