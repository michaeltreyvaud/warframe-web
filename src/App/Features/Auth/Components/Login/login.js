import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
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
  loginButton: {
    borderRadius: '3px',
    fontSize: '13px',
    borderColor: 'transparent',
    outline: 'none',
    color: 'white',
    backgroundColor: '#5899eb',
    height: '35px',
  },
  p: {
    paddingTop: '15px',
    textAlign: 'center',
    margin: '0 0 10.5px',
    color: '#656565',
    fontSize: '14px',
    lineHeight: 1.52857,
  },
};

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
          <input style={Styles.input} type="email" name="username" placeholder="Username" autoComplete="email" onChange={this.onChange} />
          <input style={Styles.input} type="password" name="password" placeholder="Password" autoComplete="password" onChange={this.onChange} />
          <input style={Styles.loginButton} type="submit" value="Login" />
        </Form>
        <div>
          <p style={Styles.p}>Dont have an account?</p>
          <Link to="/auth/signup">
            <button style={Styles.loginButton} >Signup</button>
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
