import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';

import { render, screen, waitFor } from '@testing-library/react';
import fetcher from '../apiCalls/apiCalls';
import userEvent from  '@testing-library/user-event';
import '@testing-library/jest-dom';
jest.mock('../apiCalls/apiCalls');


describe("App", () => {
  it('renders without crashing', () => {
    // const div = document.createElement('div');
    // ReactDOM.render(<App />, div);
    // ReactDOM.unmountComponentAtNode(div);
    fetcher.getAllReservations.mockResolvedValueOnce([
      {id: 1, name: 'Scar', date: '10/11', time: '11:00', number: 11},
      {id: 2, name: 'Mufassa', date: '10/12', time: '12:00', number: 12},
      {id: 3, name: 'Rafiki', date: '10/13', time: '13:00', number: 13},
    ])
    render(<App />)
  });
  
  it('should update the dom when the proper input is placed', () => {
    // const div = document.createElement('div');
    // ReactDOM.render(<App />, div);
    // ReactDOM.unmountComponentAtNode(div);
    fetcher.getAllReservations.mockResolvedValueOnce([
      {id: 1, name: 'Scar', date: '10/11', time: '11:00', number: 11},
      {id: 2, name: 'Mufassa', date: '10/12', time: '12:00', number: 12},
      {id: 3, name: 'Rafiki', date: '10/13', time: '13:00', number: 13},
    ])
    render(<App />)

        
    const nameInput = screen.getByTitle('name');
    userEvent.type(nameInput, 'Kimbo Slice');
    expect(nameInput).toHaveValue('Kimbo Slice');

    const dateInput = screen.getByTitle('date');
    userEvent.type(dateInput, '12/25');
    expect(dateInput).toHaveValue('12/25');

    const timeInput = screen.getByTitle('time');
    userEvent.type(timeInput, '12:00');
    expect(timeInput).toHaveValue('12:00');

    const guestInput = screen.getByTitle('number');
    userEvent.type(guestInput, '1');
    expect(guestInput).toHaveValue('1');

    const submitButton = screen.getByText('Submit')
    userEvent.click(submitButton)

  })
})
