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
      <Panel title="Create Category" >
        <form style={Styles.form} onSubmit={this.onSubmit}>
          <input style={Styles.input} type="text" name="title" placeholder="Title" autoComplete="off" onChange={this.onChange} />
          <input style={Styles.input} type="text" name="description" placeholder="Description" autoComplete="off" onChange={this.onChange} />
          <input style={Styles.createButton} type="submit" value="Create" />
        </form>
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
