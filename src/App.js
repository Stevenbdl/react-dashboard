import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

//import << components created by me >>
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
import Home from './components/Home'
import Charts from './components/Charts'
import Users from './components/Users'
import Cards from './components/Cards'

// css 
import './App.css'

export default class App extends Component {
  componentDidMount() {
    function load(e) {
      console.log("load");
      window.location.href = "https://stevenbdl.github.io/react-dashboard";
    }
    window.onload = load;
  }
  render() {
    return (
      <div>
        <Navbar />
        <Router>
          <SideBar />
          <div id="app-content" className="app-content">
            <Route exact path={'/react-dashboard'} component={Home} />
            <Route path={'/react-dashboard/charts'} component={Charts} />
            <Route path={'/react-dashboard/users'} component={Users} />
            <Route path={'/react-dashboard/cards'} component={Cards} />
          </div>
        </Router>
      </div>
    )
  }
}
