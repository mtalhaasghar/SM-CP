import React, { Component } from 'react'
import AdminSideDrawer from '../AdminSideDrawerRoute'
import Results from './ViewResults'
export default class ViewResultsMain extends Component {
    render() {
        return (
            <React.Fragment>
                <AdminSideDrawer/>
                <Results/>
            </React.Fragment>

        )
    }
}
