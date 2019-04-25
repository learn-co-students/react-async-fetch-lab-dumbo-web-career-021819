// create your App component here
import React from 'react'

class App extends React.Component {

    state={
        spacePeople: []
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    
    render(){
        return(<div>
            {/* This will be something  */}
        </div>
        )
    }

}

export default App