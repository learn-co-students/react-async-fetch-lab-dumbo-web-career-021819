// create your App component here
import React from 'react'

class App extends React.Component {

    state = {
        people: []
    }

    render() {
        return (
            <div>
                {this.state.people.map(person => person.name)}
            </div>
        )
    }

    componentDidMount () {
        fetch('http://api.open-notify.org/astros.json')
        .then(r => r.json())
        .then(json => {this.setState({
            people: json
        })})
    }
}

export default App;