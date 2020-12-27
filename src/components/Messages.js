import React, { Component } from 'react'


//TODO: make that the panel close when user click out side him

// css
import './css/Messages.css'

export default class Messages extends Component {
    
    togglePanelMsg = (e) => {
        let panel = document.getElementById('panel-msg');
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
    clickOutSideButton = (e) => {
        
    }
    componentDidMount() {
        window.addEventListener('click', this.clickOutSideButton);
    }
    render() {
        
        return (
            <div className="">
                <button id="msgButton" type="button" onClick={this.togglePanelMsg}>
                    <i className="fas fa-envelope"><span className="badge badge-danger">3</span></i>
                </button>
                <ul id="panel-msg" className="panel-messages animate__animated">
                    <h1 className="title-msg">Messages</h1>
                    <li>Message #1</li>
                    <li>Message #2</li>
                    <li>Message #3</li>
                </ul>
            </div>
        )
    }
}
