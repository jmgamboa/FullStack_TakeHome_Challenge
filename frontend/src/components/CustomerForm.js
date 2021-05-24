import React, {Component} from 'react'
import axios from 'axios';


class CustomerForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            company: '',
            priority: 1
        }
    }

    onChange(e) {
        this.setState({
            [e.target.className]: e.target.value
        })
    }

    async onSubmit(e) {
        event.preventDefault();
        const data = {
          name: this.state.name,
          company: this.state.company,
          priority: this.state.priority,
        };

        let response = await axios.post("http://localhost:8000/customers/", data)
        alert(`${this.state.name} was added`)
    }


    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <input value={this.state.name} type="text" placeholder='Name' className="name" onChange={this.onChange.bind(this)} />
                <input value={this.state.company} type="text" placeholder='Company' className="company" onChange={this.onChange.bind(this)} />
                <label>Priority:</label>
                <select value={this.state.priority} className="priority" id="priority" name="priority" onChange={this.onChange.bind(this)} >
                    <option value="1">Highest</option>
                    <option value="2">High</option>
                    <option value="3">Low</option>
                    <option value="4">Lowest</option>
                </select>
                <button className="customer-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                </div>
            </form>
        )
    }
}

export default CustomerForm