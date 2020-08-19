import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import ToolBar from '../AdminDashboard/Toolbar/Toolbar'
import SideDrawer from '../AdminDashboard/SideDrawer/SideDrawer'
import BackDrop from '../AdminDashboard/BackDrop/BackDrop'
import Messages from './Template'
import './Message.css'
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
                
                <Link to="/Compose" className="ComposeMessage">
                    <button class="btn btn-primary  btn-block">  
                    <img src="https://image.flaticon.com/icons/svg/54/54443.svg" alt="Compose LOGO"/><h4>Compose</h4>
                    </button>
                </Link>
               
                    
                    <Row >
                        <Col>  
                        <div className="MessageSpacer">                  
                            <Messages/>
                        </div>
                        </Col>
                    </Row>
                </Container>
           </React.Fragment>
                
        )
    }
}
