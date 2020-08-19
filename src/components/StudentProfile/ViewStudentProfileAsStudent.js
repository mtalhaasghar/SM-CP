import React, { Component } from 'react'
import StudentSideDrawerRoute from '../StudentSideDrawerRoute'
import StudentProfile from './StudentProfile'
export default class ViewStudentProfileAsStudent extends Component {
    render() {
        return (
            <React.Fragment>
                <StudentSideDrawerRoute/>
                <StudentProfile/>
            </React.Fragment>
        )
    }
}
