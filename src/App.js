// create your App component here
import React, { Component } from 'react';

export default class App extends Component {
  state = {}
  
  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
    .then(res => res.json())
  }
  
  render () {
    return (
      <h1>Gonna fetch stuff</h1>
    )
  }
}