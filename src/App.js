import React, { Component } from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
// import Product from './Components/Product/Product';
import Form from './Components/Form/Form';
import axios from 'axios';


// import './App.css';

class App extends Component {
  constructor() {
    super()

    //inventory
    this.state = {
      inventory: []
    }
  }

  //method that makes an axios.GET request to app.get
  componentDidMount(){
    axios.get(`http://localhost:4000/api/inventory`)
    .then(res => {
      console.log(res.data)
      this.setState({
          inventory: res.data
        })
      })
      
  }


  render() {
    console.log(this.state.inventory)
    return (
      <div className="App">
        <Header />
        <main>
          <Dashboard inventory= { this.state.inventory} />
          <Form />
        </main>

      </div>
    );
  }
}

export default App;
