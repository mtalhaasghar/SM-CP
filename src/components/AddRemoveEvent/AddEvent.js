import React, { Component } from 'react'
import AdminSdieDrawer from '../AdminSideDrawerRoute'
import Main from './AddEventMain'
export default class index extends Component {
    render() {
        return (
            <React.Fragment>
                <AdminSdieDrawer/>
                <Main/>
                </React.Fragment>
        )
    }
}
