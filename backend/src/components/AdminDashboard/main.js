import React, { Component } from 'react'
import ToolBar from './Toolbar/Toolbar'
import GameHistory from '../Home/GameHistroy/index'
import SideDrawer from './SideDrawer/SideDrawer'
import BackDrop from './BackDrop/BackDrop'
import './index.css'
export default class index extends Component {
    state ={
        sideDrawerOpen: false
    };
    drawerToggleClickHandler = () => {
        this.setState( (prevState) => {
            return{ sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    };
    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false});
    };
    render() {
        let backDrop;
        if(this.state.sideDrawerOpen){
            backDrop= <BackDrop click={this.backdropClickHandler}/>
        }
        return (
            <React.Fragment>
                <div style={{height:'100%'}}>
                <ToolBar drawerToggleClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backDrop}
                
                </div>                
                <GameHistory/>   
                </React.Fragment>
        )
    }
}
