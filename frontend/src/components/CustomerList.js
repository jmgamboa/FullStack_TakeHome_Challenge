import React, { Component } from 'react';
import axios from 'axios';


class CustomerList extends Component {

    state = {customers:[]};

    async componentDidMount() {
        let result = await axios.get("http://localhost:8000/customers/");
        this.setState({customers:result.data})
    }

    render() {
        return (
            <div className="customer-container">
                <div>
                    {this.state.customers.map(customer => (
                        <ul className="customer-list">
                            <h1>{customer.name} Company {customer.company} Priority  {customer.priority}</h1>
                        </ul>
                     ))}
                </div>
            </div>
        )
    }
}

export default CustomerList