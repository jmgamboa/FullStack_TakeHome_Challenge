import React, {Component} from 'react'
import axios from 'axios';


class CustomerForm extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleSubmit(event) {
        console.log('HERE')
        event.preventDefault();
        const data = {
          name: this.state.name,
          compay: this.state.company,
          priority: this.state.priority,
        };

        // const article = { title: 'React POST Request Example' };
        // axios.post('https://reqres.in/invalid-url', article)
        //     .then(response => this.setState({ articleId: response.data.id }))
        //     .catch(error => {
        //         this.setState({ errorMessage: error.message });
        //         console.error('There was an error!', error);
        //     });
    }


    onChange(e) {
        console.log('onc hange')
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder='Name' className="name" onChange={e => this.onChange(e)} />
                <input type="text" placeholder='Company' className="company"onChange={e => this.onChange(e)}  />
                <label for="priority">Priority:</label>
                <select id="priority" name="priority" onChange={e => this.onChange(e)} >
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