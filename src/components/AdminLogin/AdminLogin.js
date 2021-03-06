import React, { Component } from 'react'
import TopBar from '../Home/TopBar/index'
import Header from '../Home/Header/index'
import Login from './LoginAsAdmin'
import Footer from '../Home/Footer/index'
export default class LoginAsTeacher extends Component {
    render() {
        return (
            <div>
                <React.Fragment>
                    <TopBar/>
                    <Header/>
                    <Login/>
                    <Footer/>
                </React.Fragment>
            </div>
        )
    }
}
