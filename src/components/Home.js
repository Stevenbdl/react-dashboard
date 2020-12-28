import React, { Component } from 'react'


// css
import './css/Home.css'
export default class Home extends Component {
    render() {
        return (
            <div className="home container">
                <div className="d-flex justify-content-start flex-wrap">
                    <div className="card services shadow mb-4">
                        <div className="card-header">
                            Services
                    </div>
                        <div className="card-body">
                            <h5>Web development</h5>
                            <div className="progress">
                                <div className="progress-bar bg-success" role="progressbar" style={{ width: "80%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h5>Database</h5>
                            <div className="progress">
                                <div className="progress-bar bg-info" role="progressbar" style={{ width: "70%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h5>REST API</h5>
                            <div className="progress">
                                <div className="progress-bar bg-warning" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h5>Problem Solving</h5>
                            <div className="progress">
                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: "70%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <blockquote className="blockquote mb-0">
                                <footer className="blockquote-footer">Created by Steven Beltrán</footer>
                            </blockquote>
                        </div>
                    </div>

                    <div className="card details">
                        <div className="card-header">
                            Details
                        </div>
                        <div className="card-body">
                            This project was created for get me a job was React JS web developer,
                            and this project was maked with bootstrap 4 and Charts JS for charts,
                            this is my first front-end "big" project and I make for improve my skills
                            as Web Development.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
