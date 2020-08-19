import React, { Component } from 'react'
import TopBar from '../Home/TopBar'
import Header from '../Home/Header'
import Background from './Background/Background'
import NextMatch from '../Home/NextMatch'
import LatestMatches from './LatestMatches'
import Footer from '../Home/Footer'
export default class index extends Component {
    render() {
        return (
            <React.Fragment>
            <TopBar />
            <Header />
            <Background />
            <NextMatch />
            <LatestMatches />
            <Footer />
            </React.Fragment>
        )
    }
}
