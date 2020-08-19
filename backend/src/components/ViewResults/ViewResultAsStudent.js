import React, { Component } from 'react'
import StudentSideDrawer from '../StudentSideDrawerRoute'
import Results from './ViewResults'
export default class ViewResultsAsStudent extends Component {
    render() {
        return (
            <div>
                <React.Fragment>
                    <StudentSideDrawer/>
                    <Results/>
                </React.Fragment>
            </div>
        )
    }
}
