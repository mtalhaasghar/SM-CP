import React, { Component } from 'react'
import TopBar from '../Home/TopBar'
import Header from '../Home/Header'
import AboutMain from './Main/main'
import Description from './description/description'
import Carousel from './Carousel/Carousel'
import MatchHilights from '../Home/UpComingMatches/index'
import Footer from '../Home/Footer'
export default class index extends Component {
    render() {
        return (
            <React.Fragment>
            <TopBar />
            <Header />
            <AboutMain />
            <Description />
            <Carousel />
            <MatchHilights />
            <Footer />
            </React.Fragment>
        )
    }
}
