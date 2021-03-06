import React from 'react';
import { render, screen } from '@testing-library/react';
import { ResForm } from './ResForm.js';
import '@testing-library/jest-dom';
import userEvent from  '@testing-library/user-event';

describe('ResForm', () => {
  it('should display the form', () => {

    const fakeValidateForm = jest.fn()

    render (<ResForm validateForm={fakeValidateForm}/>)
    const nameText = screen.getByText('Name:');
    expect(nameText).toBeInTheDocument();
    const dateText = screen.getByText('Date:');
    expect(dateText).toBeInTheDocument();
    const timeText = screen.getByText('Time:');
    expect(timeText).toBeInTheDocument();
    const guestsText = screen.getByText('Guests:');
    expect(guestsText).toBeInTheDocument();
    
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
    

    // userEvent.type(dateText, '10/10')
    // userEvent.type(timeText, '12:00')
    // userEvent.type(guestsText, '1')
    // const submitButton = screen.getByText('Submit')
    // userEvent.click(submitButton)

  })
})