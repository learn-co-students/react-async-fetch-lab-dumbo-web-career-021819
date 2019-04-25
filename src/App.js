// create your App component here
import React, {Component} from 'react'
import './App.css'

class App extends Component {

  state = {
    astronauts: []
  }
  componentDidMount(){
    fetch("http://api.open-notify.org/astros.json")
    .then((response) => {
      return response.json()
    })
    .then((object) => {
      this.setState({
        astronauts: object.people
        // console.log(astronauts)
      })
    })
  }

  // astroList = () => {
  //   console.log(this.state.astronauts)
  //
  //   };
  // {words.map(item => <li>{item}</li>)}

  render(){
    return(
      <div>
        <ul>
        {this.state.astronauts.map(astronaut =>
          <li>{astronaut.name}  {"Spacecraft:"} {astronaut.craft}</li>)}
        </ul>
      </div>
    )
  };

 //  render() {
 //   return (
 //     <div>
 //       {this.state.astronauts.map((person, id) => <h1 key={id}>{person.name}</h1>)}
 //     </div>
 //   )
 // }

}

export default App;
