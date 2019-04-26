// create your App component here
import React from 'react'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      astros: []
    }
  }

  generateAstroNames = () => {
    return this.state.astros.map( ( astro, index) => {
      return <p key={index} id={index}>{astro.name}</p>
    })
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json() )
    .then(astros => {
      this.setState({ astros: astros.people })
    })
  }

  render() {
    return (
      <main>
        {this.generateAstroNames()}
      </main>
    )
  }
}

export default App
