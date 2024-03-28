import React, { Component } from 'react';
import Car from './Car'

class Garage extends Component {
    render() {
        const { cars, delete_car } = this.props;
        //const carsList = cars.filter(car => car.year > 2020).map(car => {

        const carsList = cars.filter(car => car.year >= this.props.filter_by_year ).map(car => {
            return (
                <div key={car.id}>
                    <Car brand={car.brand} model={car.model} color={car.color} year={car.year} delete_car={delete_car}
                        id={car.id} update={car.update} start_update={this.props.start_update}
                        finish_update={this.props.finish_update} />
                    <hr />
                </div>
            )
        })
        return (
            <div>
                {carsList}
            </div>
        )
    }
}

export default Garage;