import React, { Component } from 'react'


//TODO: make that the panel close when user click out side him

// css
import './css/Messages.css'

export default class Messages extends Component {
    state = {
        clickMessages : false
    }
    clickMessages = (e) => {
        this.setState({ clickMessages : true });
    }
    togglePanelMessages = (e) => {
        //console.log("click 1");
        //console.log(e);
        let panel = document.getElementById('messages');
        if(this.state.clickMessages===false) {
            panel.style.display = "none";
        }else {
            if(panel.style.display==='none'||panel.style.display==='') {
                panel.style.display = 'block';
                panel.classList.add('animate__bounceIn');
            }else {
                panel.style.display = 'none';
            }
        }
        this.setState({ clickMessages : false });
    }
    componentDidMount() {
        window.addEventListener('click', this.togglePanelMessages);
    }
    componentWillUnmount() {
        window.removeEventListener('click', this.togglePanelMessages);
    }
    render() {
        
        return (
            <div className="dropdown-messages">
                <button id="msgButton" type="button" onClick={this.clickMessages}>
                    <i className="fas fa-envelope"><span className="badge badge-danger">3</span></i>
                </button>
                <div id="messages" className="messages-content animate__animated">
                    <a href="/">Message from Gmail</a>
                    <a href="/">Message from Google</a>
                    <a href="/">10 calls</a>
                </div>
            </div>
        )
    }
}
