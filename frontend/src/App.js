import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomerForm from './components/CustomerForm';
import CustomerList from  './components/CustomerList';


class App extends Component {


  render() {
    return (
      <div className="App">
          <header>
          <h1> Customer List </h1>
          </header>
          <CustomerForm/>
          <CustomerList/>
      </div>
    );
  }
}

export default App;
