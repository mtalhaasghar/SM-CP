import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import ToolBar from '../AdminDashboard/Toolbar/Toolbar'
import SideDrawer from '../AdminDashboard/SideDrawer/SideDrawer'
import BackDrop from '../AdminDashboard/BackDrop/BackDrop'
import './ViewAdminProfile.css'
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
                        <h3>Admin Profile</h3>
                            <div>
                                <div className="ViewAdminProfile">
                                    <div>
                                        <img style={{width:"160px", height:"160px", borderRadius:"80px"}} 
                                        src="https://images.unsplash.com/photo-1550927407-50e2bd128b81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                                       alt="View Admin Profile" />
                                    </div>
                                    <div>
                                        <h4>Kashan Sarwar</h4>
                                        <div className="AdminProfileDetails">
                                            <Link to="#"><h6>bsf1601493@ue.edu.pk</h6></Link>
                                            <Link to="#"><h6>03224479053</h6></Link>
                                        </div>
                                        <div>
                                            <h6>Password:</h6>
                                                                                
                                        <div class="input-container">
                                            <input type="password" defaultValue="Password" />
                                            <i class="material-icons visibility">visibility_off</i>
                                        </div>
                                        </div>                                        
                                    </div>
                                </div>
                            </div>                            
                        </Col>                     
                    </Row>
                </Container>
            </React.Fragment>
                
        )
    }
}