import React, { Component } from 'react';

class Car extends Component {
    render() {
        console.log(this.props);
        //const color = this.props.color
        const { id, color, brand, model, year, delete_car } = this.props
        return (
            <div style={{ color }}>
                <p>Brand: {brand}</p>
                <p>Model: {model}</p>
                <p>Color: {color}</p>
                <p>Year: {year}</p>
                <button style={{ color: 'red' }} onClick={() => { delete_car(id) }}>X</button>
            </div>
        )
    }
}

export default Car;