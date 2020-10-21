import React, {Component} from 'react';


export class ResForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  updateChance = (e) => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
  }

  verifyCredentials(e) {
    e.preventDefault(); 
    let desiredRes = {
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      number: this.state.number,
    };
    this.props.validateForm(desiredRes)
  }

  render() {
    return (
      <form>
        <label>
          Name:
          <input title="name" type="text" name="name" onChange={this.updateChance}/>
        </label>
        <label>
          Date:
          <input title="date" type="text" name="date" onChange={this.updateChance}/>
        </label>
        <label>
          Time:
          <input title="time" type="text" name="time" onChange={this.updateChance}/>
        </label>
        <label>
          Guests:
          <input title="number" type="text" name="number" onChange={this.updateChance}/>
        </label>
        <input 
        type="submit" 
        value="Submit" 
        onClick={(e) => {
            this.verifyCredentials(e)
            }}
        />
      </form>
    )
  }

}