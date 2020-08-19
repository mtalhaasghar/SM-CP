import React, { Component } from 'react'
import TeacherSideDrawer from '../TeacherSideDrawerRoute'
import Details from './OtherDetails/OtherDetails'
export default class index extends Component {
    render() {
        return (
            <React.Fragment>
                <TeacherSideDrawer/>
                <Details />
            </React.Fragment>
        )
    }
}
