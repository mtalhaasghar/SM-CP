import React, { Component } from 'react'
import TopBar from './TopBar/'
import Carousel from './Carousel/'
import Header from './Header'
import UpcomingEvent from "./UpComingMatches"
import NextMatch from "./NextMatch"
import LatestMatches from "./LatestMatches"
import GameHistory from "./GameHistroy"
import CurrentScore from "./CurrentScore"
import LatestNews from "./LatestNews"
import Footer from "./Footer"
export default class index extends Component {
    render() {
        return (
            <React.Fragment>
                <TopBar />
                <Header />
                <Carousel />
                <UpcomingEvent />
                <NextMatch />
                <LatestMatches />
                <GameHistory />
                <CurrentScore />
                <LatestNews />
                <Footer />
            </React.Fragment>
        )
    }
}
