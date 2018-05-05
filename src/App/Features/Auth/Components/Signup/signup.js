import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Styles = {
  panel: {
    marginBottom: '21px',
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
    width: '100%',
    height: '35px',
    fontSize: '14px',
    lineHeight: '1.52857',
    color: '#3a3f51',
    backgroundColor: '#fff',
    backgroundImage: 'none',
    border: '1px solid #dde6e9',
    borderRadius: '4px',
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
    this.props.signup();
  }
  render() {
    return (
      <div style={Styles.panel}>
        <div style={Styles.panelHeading}>
          <span>Register your warframe Account</span>
        </div>
        <div style={Styles.panelBody}>
          <form style={Styles.form} onSubmit={this.onSubmit}>
            <input style={Styles.input} type="email" name="email" placeholder="Email Address" onChange={this.onChange} />
            <input style={Styles.input} type="text" name="firstName" placeholder="First Name" onChange={this.onChange} />
            <input style={Styles.input} type="text" name="secondName" placeholder="Surname" onChange={this.onChange} />
            <input style={Styles.input} type="text" name="password" placeholder="Password" onChange={this.onChange} />
            <input style={Styles.input} type="text" name="confirmPassword" placeholder="Confirm Password" onChange={this.onChange} />
            <input style={Styles.input} type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  setValue: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
};

export default Signup;
