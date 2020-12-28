import React, { Component } from 'react'
import { Doughnut, Bar } from 'react-chartjs-2'


// css 
import './css/Charts.css'

//import charts data
import chartsData from './ChartsData/ChartsData'

export default class Charts extends Component {

    render() {
        return (
            <div className="container">
                <h6 className="title-section">Charts</h6>
                <div className="d-flex justify-content-around earnings">
                    <div className="card earned-monthly">
                        <h5 className="card-title">Earned monthly</h5>
                        <p>$40,000</p>
                    </div>
                    <div className="card earned-annual">
                        <h5 className="card-title">Earned annual</h5>
                        <p>$55,000</p>
                    </div>
                    <div className="card clients">
                        <h5 className="card-title">Clients</h5>
                        <p>+100</p>
                    </div>
                    <div className="card projects">
                        <h5 className="card-title">Projects</h5>
                        <p>+300</p>
                    </div>
                </div>
                <div className="d-flex flex-wrap">
                    <Doughnut data={chartsData.dataDoughnut} />
                    <Bar data={chartsData.dataBar} width={40} height={20} />
                </div>
            </div>
        )
    }
}
