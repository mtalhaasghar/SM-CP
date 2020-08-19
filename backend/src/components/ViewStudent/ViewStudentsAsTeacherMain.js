import React, { Component } from 'react'
import TeacherSideDrawer from '../TeacherSideDrawerRoute'
import ViewStudent from './ViewStudentAsTeacher'
export default class ViewStudentsAsTeacher extends Component {
    render() {
        return (
        <React.Fragment>
            <TeacherSideDrawer/>
            <ViewStudent/>
        </React.Fragment>
        )
    }
}
