import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Panel from '../../../../../Common/Panel';
import Form from '../../../../../Common/Form';
import Input from '../../../../../Common/Input';

class CreateJob extends Component {
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
      lineOfBusiness: this.props.lineOfBusiness,
    };
    this.props.create(body);
  }
  render() {
    return (
      <Panel title="Create Job" >
        <Form onSubmit={this.onSubmit}>
          <Input type="text" name="lineOfBusiness" placeholder="Line of Business" autoComplete="off" onChange={this.onChange} />
          <button type="submit">Create</button>
        </Form>
      </Panel>
    );
  }
}

CreateJob.propTypes = {
  lineOfBusiness: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  create: PropTypes.func.isRequired,
};

export default CreateJob;
