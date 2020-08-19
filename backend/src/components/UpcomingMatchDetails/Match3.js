import React, { Component } from 'react'
import Topbar from '../Home/TopBar/index'
import Header from '../Home/Header/index'
import About from '../About/Main/main'
import Match3Container from './Match3/Match3Container'
import Footer from '../Home/Footer/index'
export default class Match3 extends Component {
    render() {
        return (
            <React.Fragment>
                <Topbar/>
                <Header/>
                <About/>
                <Match3Container/>
                <Footer/>
            </React.Fragment>
        )
    }
}
