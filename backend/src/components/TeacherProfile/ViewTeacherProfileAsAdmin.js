import React, { Component } from 'react'
import AdminSideDrawer from '../AdminSideDrawerRoute'
import TeacherProfile from './TeacherProfile'
export default class ViewTeacherProfileAsAdmin extends Component {
    render() {
        return (
            <React.Fragment>                               
                <AdminSideDrawer/>
                <TeacherProfile/>
            </React.Fragment>
        )
    }
}
