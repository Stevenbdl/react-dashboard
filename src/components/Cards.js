import React, { Component } from 'react'


// css 
import './css/Cards.css'

export default class Cards extends Component {
    render() {
        return (
            <div className="container">
                <h6 className="title-section">cards</h6>
                <div className="d-flex justify-content-center flex-wrap">
                    <div className="card shadow mb-4" style={{ width: "18rem", margin:'10px' }}>
                        <img className="card-img-top"
                            style={{ height: "15rem"}}
                            src="https://media.foxdeportes.com/photos/cache/1024x574/photos/2020/02/26/5e56d425c36b2.jpeg"
                            alt="Saul Alvarez"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Saul Alvarez</h5>
                            <p className="card-text">He's proffessional boxer from Mexico, rank #1 P4P of the world.</p>
                            <a href="https://es.wikipedia.org/wiki/Sa%C3%BAl_%C3%81lvarez"
                                className="btn btn-primary" target="_blank" rel="noreferrer">Go to biography</a>
                        </div>
                    </div>
                    <div className="card shadow mb-4" style={{ width: "18rem", margin:'10px' }}>
                        <img className="card-img-top"
                            style={{ height: "15rem" }}
                            src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg"
                            alt="Saul Alvarez"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Cristiano Ronaldo</h5>
                            <p className="card-text">Is a Portuguese professional footballer who plays as a forward for Serie A club Juventus.</p>
                            <a href="https://en.wikipedia.org/wiki/Cristiano_Ronaldo"
                                className="btn btn-primary" target="_blank" rel="noreferrer">Go to biography</a>
                        </div>
                    </div>
                    <div className="card shadow mb-4" style={{ width: "18rem", margin:'10px' }}>
                        <img className="card-img-top"
                            style={{ height: "15rem" }}
                            src="https://elcultural.com/wp-content/uploads/2020/08/michael-jordan.jpeg"
                            alt="Saul Alvarez"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Michael Jordan</h5>
                            <p className="card-text">Is an American former professional basketball player and the principal owner of the Charlotte Hornets of the National Basketball Association (NBA).</p>
                            <a href="https://en.wikipedia.org/wiki/Michael_Jordan"
                                className="btn btn-primary" target="_blank" rel="noreferrer">Go to biography</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
