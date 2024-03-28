

import React, { Component } from 'react';

class CarFilter extends Component {
    state = {
        year_filter: 0
    }
    handleChange = (e) => {
        // take the e.target.value and setState
        this.setState({
            year_filter: e.target.value
        })
        // call function in App.js and set the filter year
        this.props.set_filter(e.target.value)
    }
    render() {
        return (
            <div>
                <h2>filter cars by year (bigger equal than)</h2>
                <p>Filter: <input name="year" type="number" onChange={this.handleChange}
                    value={this.state.year_filter} placeholder="year" /></p>
            </div>
        );
    }
}

export default CarFilter;
