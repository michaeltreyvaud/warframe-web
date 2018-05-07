import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import Panel from '../../../../Common/Panel';
import Form from '../../../../Common/Form';
import Input from '../../../../Common/Input';

class Login extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.attempt === true && nextProps.attempt === false &&
    this.props.token === '' && nextProps.token !== '' && nextProps.token.length > 0) {
      this.props.history.push('/');
    }
  }
  onChange(e) {
    const { name, value } = e.target;
    this.props.setValue(name, value);
  }
  onSubmit(e) {
    e.preventDefault();
    const body = {
      username: this.props.username,
      password: this.props.password,
      grant_type: 'password',
    };
    this.props.login(body);
  }
  render() {
    return (
      <Panel title="Warframe Login" >
        <Form onSubmit={this.onSubmit}>
          <Input type="email" name="username" placeholder="Username" autoComplete="email" onChange={this.onChange} />
          <Input type="password" name="password" placeholder="Password" autoComplete="password" onChange={this.onChange} />
          <button type="submit">Login</button>
        </Form>
        <div>
          <p>Dont have an account?</p>
          <Link to="/auth/signup">
            <button>Signup</button>
          </Link>
        </div>
      </Panel>
    );
  }
}

Login.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  attempt: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  setValue: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};

export default withRouter(Login);
