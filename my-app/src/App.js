import React, { Component } from 'react'
import Garage from './components/Garage'
import AddCar from './components/AddCar'
import CarFilter from './components/CarFilter'
import "./App.css"

class App extends Component {
  static my_car_seq = 4
  state = {
    cars: [
      { brand: "Honda", model: "Civic", color: "green", year: 2020, hybrid: true, id: 1 },
      { brand: "Ferrari", model: "Testa Rossa", color: "red", year: 2023, id: 2 },
      { brand: "Chevrolet", model: "Cicalvaliervic", color: "orange", year: 2024, id: 3 }
    ],
    filter_by_year: 0
  }
  deleteCar = (_id) => {
    const new_cars = this.state.cars.filter(car => car.id != _id)
    this.setState({
      cars: new_cars
    })
  }
  addCar = (_car) => {
    // apply the id to car (use my_car_seq)
    const new_cars = [{ ..._car, id: App.my_car_seq++ }, ...this.state.cars ]
    this.setState({
      cars: new_cars
    })
  }
  setFilter = (year) => {
    this.setState({
      filter_by_year: year
    })  }
  render() {
    // create component called HelloWolrd
    // inside <h1>Hello world!<h1> in green
    // line #10 <HelloWorld />
    return (
      <div className="App">
        <header className="App-header">
          <h1 style= {{color: 'black'}}>My Garage</h1>
          <AddCar add_car={this.addCar} />
          <CarFilter set_Filter={this.setFilter} />
          <hr />filter_by_year
          <Garage cars={this.state.cars} delete_car={this.deleteCar} filter_by_year={this.state.filter_by_year} />
        </header>
      </div>
    );
  }
}

export default App;
