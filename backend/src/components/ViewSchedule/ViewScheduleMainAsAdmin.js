import React, { Component } from 'react'
import ViewScheduleAsAdmin from '../AdminSideDrawerRoute'
import ViewSchedule from './ViewSchedule'
export default class ViewScheduleMain extends Component {
    render() {
        return (
            <React.Fragment>
                <ViewScheduleAsAdmin/>
                <ViewSchedule/>
            </React.Fragment>
        )
    }
}
