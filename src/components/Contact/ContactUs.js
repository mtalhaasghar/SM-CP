import React, { Component } from 'react'
import TopBar from '../Home/TopBar'
import Header from '../Home/Header'
import Contact from './MainContact/MainContact'
import Details from './OtherDetails/OtherDetails'
import Footer from '../Home/Footer'
export default class index extends Component {
    render() {
        return (
            <React.Fragment>
            <TopBar />
            <Header />
            <Contact />
            <Details />
            <Footer />
            </React.Fragment>
        )
    }
}
