import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Panel from '../../../../../Common/Panel';
import Form from '../../../../../Common/Form';
import Input from '../../../../../Common/Input';
import FormSubmit from '../../../../../Common/Buttons';

class Categories extends Component {
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
      title: this.props.title,
      description: this.props.description,
    };
    this.props.create(body);
  }
  render() {
    return (
      <Panel>
        <Form onSubmit={this.onSubmit}>
          <Input type="text" name="title" placeholder="Title" autoComplete="off" onChange={this.onChange} />
          <Input type="text" name="description" placeholder="Description" autoComplete="off" onChange={this.onChange} />
          <FormSubmit title="Create" />
        </Form>
      </Panel>
    );
  }
}

Categories.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  create: PropTypes.func.isRequired,
};

export default Categories;
