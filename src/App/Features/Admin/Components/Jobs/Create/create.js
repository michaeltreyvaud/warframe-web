import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Panel from '../../../../../Common/Panel';
import Form from '../../../../../Common/Form';

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
  createButton: {
    borderRadius: '3px',
    fontSize: '13px',
    borderColor: 'transparent',
    outline: 'none',
    color: 'white',
    backgroundColor: '#5899eb',
    height: '35px',
  },
};

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
          <input style={Styles.input} type="text" name="lineOfBusiness" placeholder="Line of Business" autoComplete="off" onChange={this.onChange} />
          <input style={Styles.createButton} type="submit" value="Create" />
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
