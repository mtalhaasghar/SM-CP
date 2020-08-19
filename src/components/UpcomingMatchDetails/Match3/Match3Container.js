import React, { Component } from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css'
import img1 from './Pic1.jpg'
import './Match3Container.css'
export default class description extends Component {
    render() {
        return (
        <div className="Match3Description">
            <Container>
                <Row className="Match3DescriptionRow1">
                    <Col md="6" className="DescriptionPic">
                        <div>
                            <img src={img1} alt="description"/>
                        </div>
                    </Col>
                    <Col md="6" className="Match3Description1">
                        <div className="Description">
                            <h2>Match3 Sports</h2>
                            <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis inventore eius, doloremque fugiat id laudantium. Delectus quisquam voluptates deleniti incidunt, iusto magni mollitia rerum! Ex perspiciatis incidunt, laborum repellat illo.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo maxime eligendi sunt autem consequuntur minima, quidem iure, nisi laboriosam, nam nostrum saepe voluptatibus repellat quam reiciendis. Accusantium omnis facilis eligendi.</h5>
                        </div>
                    </Col>
                </Row>
                <Row className="Match3DescriptionRow2">
                   
                    <Col md="6">
                    </Col>
                </Row>
            </Container> 
        </div>
        )
    }
}
