import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Panel from '../../../../../Common/Panel';
import Form from '../../../../../Common/Form';
import Input from '../../../../../Common/Input';
import FormSubmit from '../../../../../Common/Buttons';

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
      <Panel>
        <Form onSubmit={this.onSubmit}>
          <Input type="text" name="applicationName" placeholder="Application Name" autoComplete="off" onChange={this.onChange} />
          <FormSubmit title="Create" />
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
