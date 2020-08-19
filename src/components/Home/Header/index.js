import React, { Component } from 'react'
import {Container ,Row, Col} from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css'
import {Link} from 'react-router-dom'
import appLogo from './app-logo.png'
import './index.css'
export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <Container>
                    <Row>
                        <Col md= "3" className="left-nevigation">
                            <img className="logo" src={appLogo}  alt="Header Logo"/>
                        </Col>
                        <Col md="9" className="right-nevigation text-right">
                            <ul className="menu-items">
                                <li className="item"><Link to='/'>Home</Link></li>
                                <li className="item"><Link to='/match'>Matches</Link></li>
                                <li className="item"><Link to='/about'>About</Link></li>
                                <li className="item"><Link to='/RegisterAs'>Register</Link></li>
                                <li className="item"><Link to='/LoginAs'>Login</Link></li>
                                <li className="item"><Link to='/contact'>Contact us</Link></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                
            </div>
        )
    }
}
