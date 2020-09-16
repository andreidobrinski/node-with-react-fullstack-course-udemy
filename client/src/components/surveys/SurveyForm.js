import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';

const FIELDS = [
  {
    name: 'title',
    label: 'Survey Title',
  },
  {
    name: 'subject',
    label: 'Subject Line',
  },
  {
    name: 'body',
    label: 'Email Body',
  },
  {
    name: 'emails',
    label: 'Recipient List',
  },
];

class SurveyForm extends Component {
  renderFields() {
    return FIELDS.map(({ label, name }) => (
      <Field
        component={SurveyField}
        type="text"
        label={label}
        name={name}
        key={name}
      />
    ));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit((values) => console.log(values))}>
          {this.renderFields()}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm',
})(SurveyForm);
