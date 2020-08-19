import React, { Component } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import ToolBar from '../AdminDashboard/Toolbar/Toolbar'
import SideDrawer from '../AdminDashboard/SideDrawer/SideDrawer'
import BackDrop from '../AdminDashboard/BackDrop/BackDrop'
import { Container, Row, Col } from 'react-bootstrap'
import './CreateSchedule.css'
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
                <div>
                    <Container  className="CreateScheduleBackground">
                        <Row className="CreateScheduleTitle">
                            <div >
                                <h2>Create Schedule</h2>
                            </div>
                        </Row>
                        <Row  className="CreateScheduleEventName">
                            <div>
                                <form action="/action_page.php">                                 
                                    <div class="form-group">
                                        <label for="CreateScheduleEventName">Event Name:</label>
                                        <input type="text" class="form-control"/> 
                                    </div>
                                </form>
                            </div>
                        </Row>
                        <Row>
                            <Col md="5" className="CreateScheduleTime">
                            <h4>Available Hours</h4>
                            <div className="Time">                            
                                <div class="form-group">                                        
                                        <label for="CreateScheduleStartTime">Start Time:</label>
                                        <input type="time" class="form-control"/> 
                                    </div> 
                                    <div class="form-group" className="EndTimeSpacer">
                                        <label for="CreateScheduleEndTime">End Time:</label>
                                        <input type="time" class="form-control"/> 
                                    </div>
                                </div>
                            </Col>                            
                            <Col md="5" className="CreateScheduleDate">
                                <div className="CreateScheduleDateInline">                            
                                    <div class="form-group">                                        
                                        <label for="CreateScheduleStartDate">Start Date:</label>
                                        <input type="Date" class="form-control"/> 
                                    </div> 
                                    <div class="form-group" className="CreateScheduleEndDateSpacer">
                                        <label for="CreateScheduleEndDate">End Date:</label>
                                        <input type="Date" class="form-control"/> 
                                    </div>
                                </div>                                                              
                            </Col>
                        </Row>
                        <Row  className="CreateScheduleButton">
                            <a href ="/ChangeSchedule" className="btn btn-danger">Create Schedule</a>
                        </Row>                        
                   </Container>
                </div>
               </React.Fragment>               
        )
    }
}
