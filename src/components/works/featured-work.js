import React, { Component } from 'react'
import ContentWork from './content-work'

export default class FeatureWork extends Component {
  render() {
    return (
      <div className="wrapper">
        <h4>Featured works</h4>
        <ContentWork />
      </div>
    )
  }
}
