import React, { Component } from 'react'
import Garage from './components/Garage'
class App extends Component {
  state = {
    cars: [
      { brand: "Honda", model: "Civic", color: "green" , year: 2020, hybrid: true, id: 1},
      { brand: "Ferrari", model: "Testa Rossa", color: "red", year: 2023, id: 2 },
      { brand: "Chevrolet", model: "Cicalvaliervic", color: "blue", year: 2024, id: 3 }
    ]
  }
  render() {
    // create component called HelloWolrd
    // inside <h1>Hello world!<h1> in green
    // line #10 <HelloWorld />
    return (
      <div className="App">
        <h1>Hello world!</h1>
        <Garage cars={this.state.cars} />
      </div>
    );
  }
}

export default App;
