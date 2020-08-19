import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css'
import './index.css'

export default class TopBar extends Component {
    render() {
        return (
            <div className="topBar">
                <Container>
                    <Row>
                        <Col md="3" className="text-left">
                            <ul className="socialMedia">
                                <li className="listItems"><i className="fa fa-facebook-official" aria-hidden="true"></i></li>
                                <li className="listItems"><i className="fa fa-instagram" aria-hidden="true"></i></li>
                                <li className="listItems"><i className="fa fa-twitter" aria-hidden="true"></i></li>
                                <li className="listItems"><i className="fa fa-youtube" aria-hidden="true"></i></li>
                            </ul>
                        </Col>
                        <Col md="9" className="text-right">
                            <ul className="contactDetails">
                                <li className="listItems"><i class="fa fa-envelope" aria-hidden="true"></i> sumeed@domain.com</li>
                                <li className="listItems"><i class="fa fa-phone" aria-hidden="true"></i> +92 310 4896577</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
