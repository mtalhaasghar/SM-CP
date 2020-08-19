import React from 'react'
import {Link} from 'react-router-dom'
import './SideDrawer.css'
const sideDrawer = props => {
let drawerClass = 'SideDrawer'
if (props.show){
    drawerClass = 'SideDrawer open';
}
    return(
    <nav className={drawerClass}>
        <ul>
            <li><Link to='/LoginAsStudent'>DashBoard</Link></li>
            <li><Link to='/ViewResultsAsStudent'>View Results</Link></li>
            <li><Link to='/ViewScheduleAsStudent'>View Schedule</Link></li>
            <li><Link to='/StudentProfileAsStudent'>Profile</Link></li>
            <li><Link to='/StudentMessages'>Message</Link></li>
        </ul>
    </nav>
    );
};
export default sideDrawer
