import React, { Component } from 'react'
import ContentWork from './content-work'

export default class FeaturedWork extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Works</h1>
        <ContentWork />
      </div>
    )
  }
}