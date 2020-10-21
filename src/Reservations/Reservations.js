import React, { Component } from 'react';


class Reservations extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      props.reservations.map(reservation => {
        <div className="reservation">
          <h1>`${reservation.id}`</h1>
          <h2>`${reservation.name}`</h2>
          <h3>`Table NO. ${reservation.number}`</h3>
          <h4>`Time ${reservation.time}`</h4>

        </div>
      })

    )
  }

}

export default Reservations;