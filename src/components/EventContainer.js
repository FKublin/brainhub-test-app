import { reduxForm } from 'redux-form';
import EventComponent from './EventComponent'

  
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
      errors.eventDate = 'Required'
    }

    return errors;
  };
  
  let EventForm = reduxForm({
    form: 'eventForm',
    validate,
  })(EventComponent);

export default EventForm