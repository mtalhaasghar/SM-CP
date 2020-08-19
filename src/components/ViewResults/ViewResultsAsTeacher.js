import React, { Component } from 'react'
import TeacherSideDrawer from '../TeacherSideDrawerRoute'
import Results from './ViewResults'
export default class ViewResultsAsTeacher extends Component {
    render() {
        return (
            <div>
                <React.Fragment>
                    <TeacherSideDrawer/>
                    <Results/>
                </React.Fragment>
            </div>
        )
    }
}
