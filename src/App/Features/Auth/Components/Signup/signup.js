import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Panel from '../../../../Common/Panel';
import Form from '../../../../Common/Form';

const Styles = {
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
      <Panel title="Warframe Account Registration" >
        <Form onSubmit={this.onSubmit}>
          <input style={Styles.input} type="email" name="email" placeholder="Email" autoComplete="email" onChange={this.onChange} />
          <input style={Styles.input} type="text" name="firstName" placeholder="First Name" autoComplete="given-name" onChange={this.onChange} />
          <input style={Styles.input} type="text" name="secondName" placeholder="Surname" autoComplete="family-name" onChange={this.onChange} />
          <input style={Styles.input} type="password" name="password" placeholder="Password" autoComplete="password" onChange={this.onChange} />
          <input style={Styles.input} type="password" name="confirmPassword" placeholder="Confirm Password" autoComplete="new-password" onChange={this.onChange} />
          <input style={Styles.input} type="submit" value="Signup" />
        </Form>
      </Panel>
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
