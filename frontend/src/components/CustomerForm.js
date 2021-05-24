import React, {useState} from 'react'

const CustomerForm = () => {
    // const [input, setInput] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

    //     props.onSubmit({
    //         name:
    //         company:
    //         priority:
    //     })
    }


    return (

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Name' className="customer-name" />
          <input type="text" placeholder='Company' className="customer-company" />

          <label for="priority">Priority:</label>
          <select id="priority" name="priority">
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

export default CustomerForm