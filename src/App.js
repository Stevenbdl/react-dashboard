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
  render() {
    return (
      <div>
        <Navbar />
        <Router>
          <SideBar />
          <div id="app-content" className="app-content">
            <Route exact path='/' component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/charts' component={Charts} />
            <Route path='/users' component={Users} />
            <Route path='/cards' component={Cards} />
          </div>
        </Router>
      </div>
    )
  }
}
