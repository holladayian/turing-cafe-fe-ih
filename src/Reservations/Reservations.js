import React, { Component } from 'react';
import './Reservations.scss';


export const Reservations = (props) => {
  console.log("props", props)


  return (
    <div className="reservations">

    {props.reservations.map(reservation => {
      return (
        <div className="reservation" key={reservation.id}>
          <h1>{reservation.id}</h1>
          <h2>{reservation.name}</h2>
          <h3>Table NO. {reservation.number}</h3>
          <h4>Time {reservation.time}</h4>

        </div>

)
})}
</div>
  )

}

