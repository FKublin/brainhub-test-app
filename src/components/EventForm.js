import { reduxForm, Field, destroy } from 'redux-form';
import renderField from './RenderField';
import renderDatePicker from './DatePicker'

let EventForm = props => {

    const { handleSubmit } = props;
    return <form onSubmit={handleSubmit} className="form">
      <div className="field">
        <div className="control">
          <Field name="firstName" component={renderField} type="text" label="First Name"/>
        </div>
      </div>
  
      <div className="field">
        <div className="control">
          <Field name="lastName" component={renderField} type="text" label="Last Name"/>
        </div>
      </div>
  
      <div className="field">
        <div className="control">
          <Field name="email" component={renderField} type="email" label="Email Address"/>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <label className="field">Event date</label>
            <Field name="eventDate" showTime={false} component={renderDatePicker} />
        </div>
      </div>
  
      <div className="field">
        <div className="control">
          <button className="button is-link">Submit</button>
        </div>
      </div>
  
    </form>;
  };

  
  const validate = val => {
    const errors = {};
    if (!val.firstName) {
      console.log('First Name is required');
      errors.firstName = 'Required';
    }
    if (!val.lastName) {
      console.log('Last Name is required');
      errors.lastName = 'Required';
    }
    if (!val.email) {
      console.log('Email is required');
      errors.email = 'Required';
    } else if (!/^.+@.+$/i.test(val.email)) {
      console.log('email is invalid');
      errors.email = 'Invalid email address';
    }
    if (!val.eventDate) {
      errors.eventDate = 'Event date is required'
    }

    return errors;
  };
  
  EventForm = reduxForm({
    form: 'eventForm',
    validate,
  })(EventForm);

export default EventForm