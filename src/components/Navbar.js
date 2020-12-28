import React, { Component } from 'react'


// my components
import Notifications from './Notifications'
import Messages from './Messages'

// css
import './css/Navbar.css'
export default class Navbar extends Component {
    render() {
        return (
            <nav id="navbar" className="navbar shadow mb-5 bg-white rounded navbar-light bg-light p-4">
                <div className="container">
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" 
                        type="search" placeholder="Search..." 
                        aria-label="Search" style={{border:'none', background:'#011b33',color:'white'}}/>
                        <button className="btn btn-primary my-sm-0" type="button">Search</button>
                    </form>
                    <div className="notifications">
                        <Notifications />
                        <Messages />
                    </div>
                </div>
            </nav>
        )
    }
}
