import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import {Link} from 'react-router-dom'
import './index.css'
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    render() {
        return (
            <div className="FooterBack">
                <Container>
                    <Row className="row">
                        <Col md="4" className="about">
                            <h3>About Sports</h3>
                            <p>In the upcoming events there will be online attendance and the online schedule also the student who could not be able to attend the sports event can enjoy the event by watching the live scores</p>
                            <div className="recentEvents">
                                <h3>Recent</h3>
                                    <div className="eventDetails">
                                        <ul className="eventList">
                                            <li className="event"><img src={img1} alt="description"></img><a href="/">One day IT vs Zoology</a></li>
                                            <li className="event"><img src={img2} alt="description"></img><a href="/">T20 Chemistry vs Math</a></li>
                                            <li className="event"><img src={img3} alt="description"></img><a href="/">opening ceremony</a></li>
                                        </ul>
                                    </div>
                            </div>
                        </Col>
                        <Col md="4" className="menu">
                            <h3>Quick Menu</h3>
                            <div className="pageLink">
                                <div className="info">                            
                                    <ul className="eventDetails">
                                        <li className="event"><Link to='/'>Home</Link></li>       
                                        <li className="event"><Link to='/LoginAs'>login</Link></li>
                                        <li className="event"><Link to='/RegisterAs'>register</Link></li>
                                        <li className="event"><Link to='/about'>about</Link></li>
                                    </ul>
                                </div>
                                <div className="others">
                                    <ul className="eventDetails">
                                        <li className="event"><Link to='/contact'>contact</Link></li>
                                        <li className="event"><Link to='/contact'>mail</Link></li>
                                        <li className="event"><Link to='/'>channel</Link></li>
                                        <li className="event"><Link to='/match'>new match</Link></li>                                   
                                    </ul>
                                </div>
                            </div>
                            <div className="plugs">
                                <h3>Links</h3>
                                <ul>                                    
                                    <li className="listItems"><i className="fa fa-facebook-official" aria-hidden="true"></i></li>
                                    <li className="listItems"><i className="fa fa-instagram" aria-hidden="true"></i></li>
                                    <li className="listItems"><i className="fa fa-twitter" aria-hidden="true"></i></li>
                                    <li className="listItems"><i className="fa fa-youtube" aria-hidden="true"></i></li>
                                </ul>
                            </div>
                        </Col>
                        <Col md="4" className="youtube">
                            <h3>Watch Videos</h3>
                            <div className="video">
                                <Link class="play-button" to="/">
                                    <span class="icon-play"></span>
                                </Link>
                            </div>
                            <div className="form">
                                <h3>Subscribe youtube</h3>
                                <p>The new youtube channel of the univerisyt sports complex is now for the students and they can easily be </p>
                                <form onSubmit={this.handleSubmit}>
                                    <label>
                                          <input type="text" placeholder="Enter Email" class="form-control" aria-label="Enter Email" value={this.state.value} onChange={this.handleChange} />
                                        </label>
                                        <input type="submit" value="Submit" class="btn btn-primary" />
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
