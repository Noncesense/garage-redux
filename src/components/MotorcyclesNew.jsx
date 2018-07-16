import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createMotorcycle } from '../actions';


class MotorcyclesNew extends Component {

  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          {...field.input}
        />
      </div>
    );
  }

  onSubmit = (values) => {
  this.props.createMotorcycle(values, (motorcycle) => {
    this.props.history.push('/'); // Navigate after submit
      return motorcycle;
    });
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          label="Brand"
          name="brand"
          type="text"
          component={this.renderField}
        />
        <label htmlFor="content">Model</label>
        <Field
          className="form-control"
          label="Model"
          name="model"
          component="input"
          rows="8"
        />
        <br/>
        <button className="btn btn-primary" type="submit"
          disabled={this.props.pristine || this.props.submitting}>
        Create Motorcycle
        </button>
      </form>
  ); }
}

export default reduxForm({ form: 'newMotorcycleForm' })(
  connect(null, { createMotorcycle })(MotorcyclesNew)
);
