import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import './index.css'
import { Parallax } from 'react-parallax'
const inlineStyle = {
    background: '#fff',
    left: '50%',
    top: '50%',
    position: 'absolute',
    padding: '20px',
    transform: 'translate(-50%, -50%)',
    }
export default class index extends Component {
    render() {
        return (
            <div className="carouselSection">
                <Carousel>
                    <Carousel.Item>
                        <Parallax bgImage={ img1 } strength={600}>
                            <div style={{ height: 700 }}>
                                {/* <div style={inlineStyle}>HTML inside the parallax</div> */}
                            </div>
                        </Parallax>
                        {/* <img
                        className="d-block w-100 carouselImage"
                        src={img1}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        {/* </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <Parallax bgImage={ img2 } strength={600}>
                            <div style={{ height: 700 }}>
                                {/* <div style={inlineStyle}>HTML inside the parallax</div> */}
                            </div>
                        </Parallax>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Parallax bgImage={ img3 } strength={600}>
                            <div style={{ height: 700 }}>
                                {/* <div style={inlineStyle}>HTML inside the parallax</div> */}
                            </div>
                        </Parallax>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}
