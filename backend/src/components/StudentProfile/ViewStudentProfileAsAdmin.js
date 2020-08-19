import React, { Component } from 'react'
import AdminSideDrawerRoute from '../AdminSideDrawerRoute'
import StudentProfile from './StudentProfile'
export default class ViewStudentProfileAsAdmin extends Component {
    render() {
        return (
            <React.Fragment>
                <AdminSideDrawerRoute/>
                <StudentProfile/>
            </React.Fragment>
        )
    }
}
