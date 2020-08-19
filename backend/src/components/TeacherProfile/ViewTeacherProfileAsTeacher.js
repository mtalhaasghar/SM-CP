import React, { Component } from 'react'
import TeacherSideDrawer from '../TeacherSideDrawerRoute'
import TeacherProfile from './TeacherProfile'
export default class ViewTeacherProfileAsTeacher extends Component {
    render() {
        return (
            <React.Fragment>                               
                <TeacherSideDrawer/>
                <TeacherProfile/>
            </React.Fragment>
        )
    }
}
