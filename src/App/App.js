import React, { Component } from 'react';
import fetcher from '../apiCalls/apiCalls.js';
import {Reservations} from '../Reservations/Reservations.js';
import {ResForm} from '../ResForm/ResForm.js'
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      reservations: []
  
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

  validateForm = (desiredRes) => {
    console.log(desiredRes)
    if(desiredRes.name && desiredRes.date && desiredRes.time && desiredRes.number) {
      console.log('b')
      this.bookRes(desiredRes)
    }
    
  }
  
  bookRes = async (newRes) => {
    await fetcher.postNewReservation(newRes);
    this.gatherReservations()
    console.log('c')
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <ResForm validateForm={this.validateForm}/>
          <Reservations reservations={this.state.reservations}/>
          

        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}

// initial commit 

export default App;
