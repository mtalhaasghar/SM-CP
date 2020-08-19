import React, { Component } from 'react'
import TeacherSideDrawerRoute from '../TeacherSideDrawerRoute'
import StudentProfile from './StudentProfile'
export default class ViewStudentProfileAsTeacher extends Component {
    render() {
        return (
            <React.Fragment>
                <TeacherSideDrawerRoute/>
                <StudentProfile/>
            </React.Fragment>
        )
    }
}
