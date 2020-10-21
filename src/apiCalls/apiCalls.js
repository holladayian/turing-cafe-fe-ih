const fetcher = {
  getAllReservations() {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .then(promise => promise)
    .catch(err => console.log(err))
  },

  postNewReservation(newReservation) {
    let int = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(newReservation)
    }
    fetch('http://localhost:3001/api/v1/reservations', int)
    .then(response => response.json())
    .then(promise => promise.json())
    .catch(err => console.log(err))
  }
}