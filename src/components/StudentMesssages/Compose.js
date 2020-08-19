import React, { Component } from 'react'
import StudentSideDrawer from '../StudentSideDrawerRoute'
import Details from './OtherDetails/OtherDetails'
export default class index extends Component {
    render() {
        return (
            <React.Fragment>
                <StudentSideDrawer/>
                <Details />
            </React.Fragment>
        )
    }
}
