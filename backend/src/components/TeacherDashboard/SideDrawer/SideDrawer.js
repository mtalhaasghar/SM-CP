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
            <li><Link to='/LoginAsTeacher'>Dashboard</Link></li>
            <li><Link to='/OnlineAttendance'>Online Attendance</Link></li>
            <li><Link to='/AddResult'>Add Results</Link></li>
            <li><Link to='/ViewResultsAsTeacher'>View Results</Link></li>
            <li><Link to='/ViewScheduleAsTeacher'>View Schedule</Link></li>
            <li><Link to='/ViewTeacherProfileAsTeacher'>Profile</Link></li>
            <li><Link to='/ViewStudentAsTeacher'>Student Profile</Link></li>
            <li><Link to='/TeacherMessages'>Message</Link></li>
        </ul>
    </nav>
    );
};
export default sideDrawer
