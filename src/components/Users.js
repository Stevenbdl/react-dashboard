import React, { Component } from 'react'


//import css
import './css/Users.css'
export default class Users extends Component {
    render() {
        return (
            <div className="users container">
                <h6 className="title-section">Users</h6>
                <div className="d-flex justify-content-around flex-wrap">
                    <div className="card shadow">
                        <img src="https://tentulogo.com/wp-content/uploads/Mark-Zuckerberg-FB.jpg"
                            alt="" className="card-img-top img-circle" />
                        <div className="card-body">
                            <div className="card-title">Mark Zuckerberg</div>
                        </div>
                    </div>
                    <div className="card shadow">
                        <img src="https://s.france24.com/media/display/c12c14d0-43b6-11eb-8227-005056a964fe/w:1280/p:16x9/JOE%20BIDEN%201-1.webp"
                            alt="" className="card-img-top img-circle" />
                        <div className="card-body">
                            <div className="card-title">Joe Biden</div>
                        </div>
                    </div>
                    <div className="card shadow">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/8/8d/President_Barack_Obama.jpg"
                            alt="" className="card-img-top img-circle" />
                        <div className="card-body">
                            <div className="card-title">Barack Obama</div>
                        </div>
                    </div>
                    <div className="card shadow">
                        <img src="https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk.jpg"
                            alt="" className="card-img-top img-circle" />
                        <div className="card-body">
                            <div className="card-title">Elon Musk</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
