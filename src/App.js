// create your App component here
import React, { Component } from 'react';

export default class App extends React.Component {

  state = {
    peopleInSpace: []
  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(r => r.json())
    .then(r => this.setState({peopleInSpace: r.people}))
  }

  render(){
    return(
      <div>
        {console.log(this.state.peopleInSpace)}
        { this.state.peopleInSpace.map (person => {
            return <div>
              <h2>{person.name}</h2> 
              <p>Craft: {person.craft}</p>
            </div>
        })}
      </div>
    )
  }
}