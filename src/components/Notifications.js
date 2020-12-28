import React, { Component } from 'react'


// css 
import './css/Notifications.css'

export default class Notifications extends Component {

    state = {
        clickNotifi : false
    }
    clickNotifi = (e) => {
        this.setState({ clickNotifi : true });
    }
    togglePanelNotifi = (e) => {
        //console.log("click 2")
        //console.log(e);
        let panel = document.getElementById('notifications');
        if(this.state.clickNotifi===false) {
            panel.style.display = "none";
        }else {
            if(panel.style.display==='none'||panel.style.display==='') {
                panel.style.display = 'block';
                panel.classList.add('animate__bounceIn');
            }else {
                panel.style.display = 'none';
            }
        }
        this.setState({ clickNotifi : false });
    }
    componentDidMount() {
        window.addEventListener('click', this.togglePanelNotifi);
    }
    componentWillUnmount() {
        window.removeEventListener('click', this.togglePanelNotifi);
    }
    render() {
        return (
            <div className="dropdown-notification">
                <button id="notifiToggle" type="button" onClick={this.clickNotifi}>
                    <i className="fas fa-bell"><span className="badge badge-danger">3</span></i>
                </button>
                <div id="notifications" className="notifi-content animate__animated">
                    <a href="/">Get job at google</a>
                    <a href="/">60% discount</a>
                    <a href="/">10% loaded</a>
                </div>
            </div>
        )
    }
}
