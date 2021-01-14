import React, { Component } from 'react'
import './nav.css'

export default class Nav extends Component {
  render() {
    return (
      <div className="wrapper">
        <ul className="nav-container">
          <li><a href="/works">Works</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    )
  }
}
