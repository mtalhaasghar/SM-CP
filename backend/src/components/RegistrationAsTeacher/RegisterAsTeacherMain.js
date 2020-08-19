import React, { Component } from 'react'
import TopBar from '../Home/TopBar/index'
import Header from '../Home/Header/index'
import Register from './RegistrationAsTeacher'
import Footer from '../Home/Footer/index'
export default class RegisterAsTeacher extends Component {
    render() {
        return (
            <div>
                <React.Fragment>
                    <TopBar/>
                    <Header/>
                    <Register/>
                    <Footer/>
                </React.Fragment>
            </div>
        )
    }
}
