import React, { Component } from 'react';

class WelcomeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      greeting: ''
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName } = this.state;
    if (firstName && lastName) {
      this.setState({ greeting: `Witaj, ${firstName} ${lastName}!` });
    }
  };

  render() {
    const { firstName, lastName, greeting } = this.state;

    return (
      <div>
        <h1>Formularz Powitania</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="firstName">Imię:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={this.handleInputChange}
              placeholder="Wpisz swoje imię"
            />
          </div>
          <div>
            <label htmlFor="lastName">Nazwisko:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={this.handleInputChange}
              placeholder="Wpisz swoje nazwisko"
            />
          </div>
          <button type="submit">Przywitaj mnie!</button>
        </form>

        {greeting && <h2>{greeting}</h2>}
      </div>
    );
  }
}

export default WelcomeForm;
