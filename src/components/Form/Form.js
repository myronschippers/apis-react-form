import React, { Component } from 'react';
import styles from './Form.module.css';


class Form extends Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
    },
    fullName: '',
  }

  clickSave = (event) => {
    console.log('SAVE ME', this);
    event.preventDefault();

    this.setState({
      fullName: `${this.state.form.firstName} ${this.state.form.lastName}`,
    })
  }

  // changeFirstName = (event) => {
  //   // console.log('element', event.target);
  //   // console.log('Change FirstName:', event.target.value);
  //   this.setState({
  //     form: {
  //       ...this.state.form,
  //       // lastName: this.state.form.lastName,
  //       firstName: event.target.value
  //     }
  //   })
  // }

  // changeLastName = (event) => {
  //   // console.log('element', event.target);
  //   // console.log('Change LastName:', event.target.value);
  //   this.setState({
  //     form: {
  //       ...this.state.form,
  //       lastName: event.target.value
  //     }
  //   })
  // }

  changeInput(event, fieldKey) {
    this.setState({
      form: {
        ...this.state.form,
        [fieldKey]: event.target.value
      }
    })
  }

  render() {
    return (
      <form onSubmit={this.clickSave} className="container">
        <input
          type="text"
          placeholder="First Name"
          onChange={(event) => this.changeInput(event, 'firstName')}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={(event) => this.changeInput(event, 'lastName')}
          required
        />
        <button className={styles.btn}>Save ME</button>

        <p>changing values: {this.state.form.firstName} {this.state.form.lastName}</p>
        <p>{JSON.stringify(this.state)}</p>
        <h2>{this.state.fullName}</h2>
      </form>
    );
  }
}

export default Form;