import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

export default class Nav extends Component {
  render() {
    return (
      <div className="wrapper">
        <ul className="nav-container">
          <li><Link to="/react-gh-pages">Home</Link></li>
          <li><Link to="/works">Works</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    )
  }
}
