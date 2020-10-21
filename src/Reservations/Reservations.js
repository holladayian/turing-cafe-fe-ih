import React from 'react';
import './Reservations.scss';


export const Reservations = (props) => {
  console.log("props", props)


  return (
    <div className="reservations">

    {props.reservations.map(reservation => {
      return (
        <div className="reservation" key={reservation.id}>
          <h1>{reservation.date}</h1>
          <h2>{reservation.name}</h2>
          <h3>Guests: {reservation.number}</h3>
          <h4>Time: {reservation.time}</h4>

        </div>

)
})}
</div>
  )

}

