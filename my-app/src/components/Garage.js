import React, { Component } from 'react';
import Car from './Car'

class Garage extends Component {
    render() {
        const { cars } = this.props;
        const carsList = cars.filter(car => car.year > 2020).map(car => {
            return (
                <div key={car.id}>
                    <Car brand={car.brand} model={car.model} color={car.color} year={car.year}/>
                    <hr />
                </div>
            )
        })
        return (
            <div>
                { carsList }
            </div>
        )
    }
}

export default Garage;