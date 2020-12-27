import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './css/SideBar.css'
export default class SideBar extends Component {
    state = {
        toggle: true
    }
    toggleSideBar = (e) => {
        let sideBar = document.getElementById('side-bar');
        let toggleSideBarBtn = document.getElementById('toggleSideBarBtn');
        let navbar = document.getElementById('navbar');
        let appContent = document.getElementById('app-content');
        if (this.state.toggle === true) {
            //hide side bar with set width to 0
            sideBar.style.width = 0;
            //button for toggle side bar put left
            toggleSideBarBtn.style.marginLeft = 0;
            //navbar content put more left
            navbar.style.marginLeft = 0;
            //move left the content when the side bar is hidden
            appContent.style.marginLeft = 0;
        } else {
            //show side bar with set width to 240
            sideBar.style.width = "240px";
            toggleSideBarBtn.style.marginLeft = "240px";
            navbar.style.marginLeft = "240px";
            //move right the content when the side bar is showed
            appContent.style.marginLeft = "255px";
        }
        this.setState({ toggle: !this.state.toggle });
    }
    render() {
        
        return (
            <div className="">
                <button id="toggleSideBarBtn" type="button" className="toggle-side-bar" onClick={this.toggleSideBar}>
                    <i className="fas fa-chevron-right"></i>
                </button>
                <div id="side-bar" className="side-bar">
                    <h1 className="text-uppercase" style={{ marginBottom: "120px" }}>dashboard</h1>
                    <li><Link to="/react-dashboard"><i className="fas fa-home"></i>home</Link></li>
                    <li><Link to="/react-dashboard/charts"><i className="fas fa-chart-pie"></i>charts</Link></li>
                    <li><Link to="/react-dashboard/users"><i className="fas fa-users"></i>users</Link></li>
                    <li><Link to="/react-dashboard/cards"><i className="fas fa-id-card"></i>cards</Link></li>
                </div>
            </div>
        )
    }
}
