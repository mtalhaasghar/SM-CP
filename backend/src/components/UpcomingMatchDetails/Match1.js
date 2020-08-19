import React, { Component } from 'react'
import Topbar from '../Home/TopBar/index'
import Header from '../Home/Header/index'
import About from '../About/Main/main'
import Match1Container from './Match1/Match1Container'
import Footer from '../Home/Footer/index'
export default class Match1 extends Component {
    render() {
        return (
            <React.Fragment>
                <Topbar/>
                <Header/>
                <About/>
                <Match1Container/>
                <Footer/>
            </React.Fragment>
        )
    }
}
