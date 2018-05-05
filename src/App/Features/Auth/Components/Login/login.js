import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Panel from '../../../../Common/Panel';

const Styles = {
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

class Login extends Component {
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
      username: this.props.username,
      password: this.props.password,
      grant_type: 'password',
    };
    console.log('Body : ', body);
    this.props.login(body);
  }
  render() {
    return (
      <Panel title="Login to your Warframe Account" >
        <form style={Styles.form} onSubmit={this.onSubmit}>
          <input style={Styles.input} type="email" name="username" placeholder="Username" autoComplete="email" onChange={this.onChange} />
          <input style={Styles.input} type="password" name="password" placeholder="Password" autoComplete="password" onChange={this.onChange} />
          <input style={Styles.input} type="submit" value="Login" />
        </form>
      </Panel>
    );
  }
}

Login.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};

export default Login;
