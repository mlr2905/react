
import React, { Component } from 'react';

class AddCar extends Component {
    state = {
        car_from_input: {
            brand: "",
            model: "",
            year: "",
            color: "green",
            hybrid: false
        }
    }
    handleChange = (e) => {
        console.log(e.target.name);
        this.setState( {
            car_from_input: {
                ...this.state.car_from_input,
                [e.target.name]: e.target.value
            }
        })
        console.log(this.state);
    }
    handleSubmit = (e) => { 
        e.preventDefault();
        console.log(this.state.car_from_input);        
        this.props.add_car(this.state.car_from_input)
    }
    render() {
        console.log(this.props);
        return (
          <div>
            <h2>add new car</h2>
            <form onSubmit={this.handleSubmit}>
              <p>Brand: <input name="brand" type="text" onChange={this.handleChange} 
                  value={this.state.car_from_input.brand} placeholder="car brand" required/></p>
              <p>Model: <input name="model" type="text" onChange={this.handleChange} 
                  value={this.state.car_from_input.model} placeholder="car model" required/></p>
              <p style={{color: this.state.car_from_input.color}}>Color:  &nbsp;
              <select name="color" id="color_id" onChange={this.handleChange}  style={{color: this.state.car_from_input.color}}
                  value={this.state.car_from_input.color}>
                    <option value="green" style={{color: "green"}}>Green</option>
                    <option value="red" style={{color: "red"}}>Red</option>
                    <option value="orange" style={{color: "orange"}}>Orange</option>
                    <option value="pink" style={{color: "pink"}}>Pink</option>
                    <option value="black" style={{color: "black"}}>Black</option>
                    <option value="blue" style={{color: "blue"}}>Blue</option>
                  </select>
                  </p>  
               <p>Year: <input name="year" type="number" onChange={this.handleChange} 
                  value={this.state.car_from_input.year} placeholder="year" required/></p>              
             <button type="submit">Buy New Car</button>
            </form>
            <hr />
          </div>
        );
      }
}

export default AddCar;