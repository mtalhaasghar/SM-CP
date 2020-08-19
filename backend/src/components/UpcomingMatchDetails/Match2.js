import React, { Component } from 'react'
import Topbar from '../Home/TopBar/index'
import Header from '../Home/Header/index'
import About from '../About/Main/main'
import Match2Container from './Match2/Match2Container'
import Footer from '../Home/Footer/index'
export default class Match2 extends Component {
    render() {
        return (
            <React.Fragment>
                <Topbar/>
                <Header/>
                <About/>
                <Match2Container/>
                <Footer/>
            </React.Fragment>
        )
    }
}
