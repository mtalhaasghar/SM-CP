import React, { Component } from 'react'
import TeacherSideDrawer from '../TeacherSideDrawerRoute'
import { Button } from './Button'
import StudentTable from '../RemoveStudent/Grid'
export default class OnlineAttendance extends Component {
    render() {
        return (
            <React.Fragment>
                <TeacherSideDrawer/>
                <Button onClick = {()=>{console.log("Present Marked")}}>Present</Button>
                <StudentTable/>
            </React.Fragment>
        )
    }
}
