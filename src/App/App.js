import React, { Component } from 'react';
import fetcher from '../apiCalls/apiCalls.js';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      reservations: {}
  
    }

  }

  componentDidMount() {
    this.gatherReservations()
  }


  gatherReservations = async () => {
    const reservations = await fetcher.getAllReservations();
    this.setState({ reservations })
    console.log(this.state.reservations)
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          

        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}

// initial commit 

export default App;
