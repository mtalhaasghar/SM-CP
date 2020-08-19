import React, { Component } from 'react'
import ViewScheduleAsStudent from '../StudentSideDrawerRoute'
import ViewSchedule from './ViewSchedule'
export default class ViewScheduleMain extends Component {
    render() {
        return (
            <React.Fragment>
                <ViewScheduleAsStudent/>
                <ViewSchedule/>
            </React.Fragment>
        )
    }
}
