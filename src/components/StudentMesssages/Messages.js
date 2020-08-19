import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import StudentSideDrawer from '../StudentSideDrawerRoute'
import Messages from './Template'
import './Message.css'
export default class index extends Component {
    
    render() {
        return (
            <React.Fragment>
                <StudentSideDrawer/>
                <Container>                
                <Link to="/StudentComposeMessage" className="ComposeMessage">
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
