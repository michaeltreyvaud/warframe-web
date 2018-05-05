import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Styles = {
  panel: {
    margin: '10px',
    backgroundColor: '#fff',
    border: '1px solid transparent',
    borderRadius: '4px',
    borderColor: '#cfdbe2',
  },
  panelHeading: {
    padding: '15px',
  },
  panelBody: {
    padding: '15px',
  },
  form: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  input: {
    fontSize: '14px',
    lineHeight: '1.52857',
    color: '#3a3f51',
    backgroundColor: '#fff',
    backgroundImage: 'none',
    border: '1px solid #dde6e9',
    borderRadius: '4px',
    marginBottom: '10px',
    padding: '6px 16px',
  },
};

class Signup extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    const { name, value } = e.target;
    this.props.setValue(name, value);
  }
  onSubmit(e) {
    e.preventDefault();
    const body = {
      email: this.props.email,
      firstName: this.props.firstName,
      secondName: this.props.secondName,
      password: this.props.password,
      confirmPassword: this.props.confirmPassword,
    };
    this.props.signup(body);
  }
  render() {
    return (
      <div style={Styles.panel}>
        <div style={Styles.panelHeading}>
          <span>Register your Warframe Account</span>
        </div>
        <div style={Styles.panelBody}>
          <form style={Styles.form} onSubmit={this.onSubmit}>
            <input style={Styles.input} type="email" name="email" placeholder="Email" autoComplete="email" onChange={this.onChange} />
            <input style={Styles.input} type="text" name="firstName" placeholder="First Name" autoComplete="given-name" onChange={this.onChange} />
            <input style={Styles.input} type="text" name="secondName" placeholder="Surname" autoComplete="family-name" onChange={this.onChange} />
            <input style={Styles.input} type="password" name="password" placeholder="Password" autoComplete="new-password" onChange={this.onChange} />
            <input style={Styles.input} type="password" name="confirmPassword" placeholder="Confirm Password" autoComplete="on" onChange={this.onChange} />
            <input style={Styles.input} type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  email: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  secondName: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
};

export default Signup;
