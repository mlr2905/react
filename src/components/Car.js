import React, { Component } from 'react';

class Car extends Component {
    handleChange = (e) => {
        console.log(e.target.name);
        //
    }

    render() {
        console.log(this.props);
        //const color = this.props.color
        const { id, color, brand, model, year, update, delete_car } = this.props
        return !update?
            (<div style={{ color }}>
                <p>Brand: {brand}</p>
                <p>Model: {model}</p>
                <p>Color: {color}</p>
                <p>Year: {year}</p>
                <button style={{ color: 'red' }} onClick={() => { delete_car(id) }}>X</button>
                <button style={{color: 'blue'}} onClick={ () => this.props.start_update(id) }>U</button>
            </div>) :
            (<div style={{ color }}>
                <p>Brand: <input type="text" value={brand} /></p>
                <p>Model: <input type="text" value={model} /></p>
                <p >Color:  &nbsp;
                <select name="color" id="color_id" value={color}>
                      <option value="green" style={{color: "green"}}>Green</option>
                      <option value="red" style={{color: "red"}}>Red</option>
                      <option value="orange" style={{color: "orange"}}>Orange</option>
                      <option value="pink" style={{color: "pink"}}>Pink</option>
                      <option value="black" style={{color: "black"}}>Black</option>
                      <option value="blue" style={{color: "blue"}}>Blue</option>
                    </select>
                    </p>                 
                <p>Year: <input type="text" value={year} /></p>
                <button style={{ color: 'red' }} onClick={() => { delete_car(id) }}>X</button>
                <button style={{color: 'green'}} onClick={ () => this.props.finish_update(id) }>V</button>
            </div>)            

    }
}

export default Car;