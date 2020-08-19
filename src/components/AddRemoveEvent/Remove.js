import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import ToolBar from '../AdminDashboard/Toolbar/Toolbar'
import SideDrawer from '../AdminDashboard/SideDrawer/SideDrawer'
import BackDrop from '../AdminDashboard/BackDrop/BackDrop'
import UpcomingEvents from '../Home/UpComingMatches/index'
import './Remove.css'
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
                <div className="RemoveEventSpacer">
                    <UpcomingEvents/>
                </div>
                <div className="AddRemoveButtons">
                    <ul>
                <li className="Eventbutton"><Link to="/LoginAsAdmin" className="btn btn-danger">Remove Event</Link></li>
                <li className="Eventbutton"><a href ="/AddEvent" className="btn btn-danger">Add Event</a></li> 
                </ul>
                </div>
                </React.Fragment>
        )
    }
}
