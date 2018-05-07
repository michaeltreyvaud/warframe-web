import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Panel from '../../../../Common/Panel';
import Form from '../../../../Common/Form';
import Input from '../../../../Common/Input';

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
          <Input type="email" name="email" placeholder="Email" autoComplete="email" onChange={this.onChange} />
          <Input type="text" name="firstName" placeholder="First Name" autoComplete="given-name" onChange={this.onChange} />
          <Input type="text" name="secondName" placeholder="Surname" autoComplete="family-name" onChange={this.onChange} />
          <Input type="password" name="password" placeholder="Password" autoComplete="password" onChange={this.onChange} />
          <Input type="password" name="confirmPassword" placeholder="Confirm Password" autoComplete="new-password" onChange={this.onChange} />
          <input type="submit" value="Signup" />
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
