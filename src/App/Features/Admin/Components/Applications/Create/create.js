import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Panel from '../../../../../Common/Panel';
import Form from '../../../../../Common/Form';
import Input from '../../../../../Common/Input';

class Applications extends Component {
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
      applicationName: this.props.applicationName,
    };
    this.props.create(body);
  }
  render() {
    return (
      <Panel title="Create Application" >
        <Form onSubmit={this.onSubmit}>
          <Input type="text" name="applicationName" placeholder="Application Name" autoComplete="off" onChange={this.onChange} />
          <input type="submit" value="Create" />
        </Form>
      </Panel>
    );
  }
}

Applications.propTypes = {
  applicationName: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  create: PropTypes.func.isRequired,
};

export default Applications;
