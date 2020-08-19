import React, { Component } from 'react'
import TeacherSideDrawer from '../TeacherSideDrawerRoute'
import AddResult from './AddResult'
export default class AddResultMain extends Component {
    render() {
        return (
            <React.Fragment>
                <TeacherSideDrawer/>
                <AddResult/>
            </React.Fragment>
        )
    }
}
