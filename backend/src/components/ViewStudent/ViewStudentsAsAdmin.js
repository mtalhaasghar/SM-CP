import React, { Component } from 'react'
import AdminSideDrawer from '../AdminSideDrawerRoute'
import ViewStudent from './ViewStudent'
export default class ViewStudentsAsAdmin extends Component {
    render() {
        return (
        <React.Fragment>
            <AdminSideDrawer/>
            <ViewStudent/>
        </React.Fragment>
        )
    }
}
