

import React, { Component } from 'react';

class CarFilter extends Component {
    state = {
        filter_by_year: 0
    }
    handleChange = (e) => {

        this.setState( {

                filter_by_year: e.target.value
                 
        })
        this.props.set_Filter(this.state.filter_by_year)

    }
    render() {
        return (
            <div>
                <h2>filter cars by year (bigger equal than)</h2>
                <p>Filter: <input name="year" type="number" onChange={this.handleChange}
                    value={this.state.filter_by_year} placeholder="year" /></p>
            </div>
        );
    }
}

export default CarFilter;
