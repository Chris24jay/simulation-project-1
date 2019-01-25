import React, { Component } from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Product from './Components/Product/Product';
import Form from './Components/Form/Form';


// import './App.css';

class App extends Component {
  constructor(){
    super()

    //inventory
    this.state ={
      
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Dashboard />
          <Form />
        </main>

      </div>
    );
  }
}

export default App;
