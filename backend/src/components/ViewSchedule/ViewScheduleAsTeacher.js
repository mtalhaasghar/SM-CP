import React, { Component } from 'react'
import ViewScheduleAsTeacher from '../TeacherSideDrawerRoute'
import ViewSchedule from './ViewSchedule'
export default class ViewScheduleMain extends Component {
    render() {
        return (
            <React.Fragment>
                <ViewScheduleAsTeacher/>
                <ViewSchedule/>
            </React.Fragment>
        )
    }
}
