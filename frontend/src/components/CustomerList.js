import React, { Component } from 'react';
import axios from 'axios';


class CustomerList extends Component {

    state = {customers:[]};

    async componentDidMount() {
        let result = await axios.get("http://localhost:8000/customers/");
        this.setState({customers:result.data})
    }

    async delete(cid) {
        let result = await axios.delete(`http://localhost:8000/customers/${cid}/`);
        alert(`Customer id ${cid} deleted`)
    }

    render() {
        return (
            <div className="customer-container">
                <div>
                    {this.state.customers.map(customer => (
                        <ul className="customer-list">
                            <h1>{customer.name} {customer.company} {customer.priority}</h1><button className="delete"onClick={() => this.delete(customer.id)}>Delete</button>
                        </ul>
                     ))}
                </div>
            </div>
        )
    }
}

export default CustomerList