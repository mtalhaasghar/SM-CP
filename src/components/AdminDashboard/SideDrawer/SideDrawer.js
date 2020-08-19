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
            <li><Link to='/LoginAsAdmin'>Dashboard</Link></li>
            <li><Link to='/RemoveEvent'>Add/Remove Events</Link></li>
            <li><Link to='/AddOrRemoveTeaceherOrStudentModal'>Add/Remove Teacher/Student</Link></li>
            <li><Link to='/ViewResultsAsAdmin'>View Results</Link></li>
            <li><Link to='/CreateScheduleModal'>Create and Change Schedule</Link></li>
            <li><Link to='/ViewScheduleAsAdmin'>View Schedule</Link></li>
            <li><Link to='/ViewRecords'>View Records</Link></li>
            <li><Link to='/ViewAdminProfile'>Profile</Link></li>
            <li><Link to='/ViewStudentTeacherProfileModal'>View Teacher/ Student Profile</Link></li>
            <li><Link to='/Messages'>Message</Link></li>
        </ul>
    </nav>
    );
};
export default sideDrawer
