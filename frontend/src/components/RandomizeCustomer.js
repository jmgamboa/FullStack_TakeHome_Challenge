import React, { Component } from 'react';
import axios from 'axios';


class RandomizeButton extends Component {


    async randomizeCustomer() {
        let response = await axios.post('http://localhost:8000/randomize-customer/', {});
        alert(`${response.data.name} was set to highest priority`)
    }

    render() {
        return (
            <div className="randomize-container">
                <div className="vertical-center">
                    <button onClick={this.randomizeCustomer} className="randomize-customer">
                        Randomize Customer
                    </button>
                </div>
            </div>
        )
    }
}

export default RandomizeButton