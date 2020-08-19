import React from 'react'
import {Link} from 'react-router-dom'
import ToggleButton from '../SideDrawer/DrawerToggleButton'
import './Toolbar.css'
const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbarNavigation">
            <div>
                <ToggleButton click={props.drawerToggleClickHandler}/>
            </div>
            <div className="spacer"></div>
            <div className="toolbarNavigationItems">
                <ul>
                    <li><Link to='/'>Log out</Link></li>
                </ul>
            </div>
        </nav>
    </header>
);
export default toolbar;