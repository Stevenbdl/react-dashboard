import React, { Component } from 'react'


// css 
import './css/Notifications.css'

export default class Notifications extends Component {
    togglePanel = (e) => {
        let panel = document.getElementById('panel-notifi');
        if (panel.style.display === 'none' || panel.style.display === '') {
            panel.classList.remove('animate__bounceOut');//remove fadeOut animation
            panel.classList.add('animate__bounceIn');
            panel.style.display = 'block';
        } else {
            panel.classList.remove('animate__bounceIn');//remove fadeIn animation
            panel.classList.add('animate__bounceOut');
            setTimeout(() => {
                panel.style.display = 'none';
            }, 1000);
        }
    }
    
    render() {
        return (
            <div className="">
                <button type="button" onClick={this.togglePanel}>
                    <i className="fas fa-bell"><span className="badge badge-danger">3</span></i>
                </button>
                <ul id="panel-notifi" className="panel-notifications animate__animated">
                    <h1 className="title-notifi">Notifications</h1>
                    <li>Notification #1</li>
                    <li>Notification #2</li>
                    <li>Notification #3</li>
                </ul>
            </div>
        )
    }
}
