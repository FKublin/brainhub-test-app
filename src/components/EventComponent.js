import React, {useState} from 'react'
import { Field } from 'redux-form';
import renderField from './utils/RenderField';
import renderDatePicker from './utils/DatePicker'

let EventForm = props => {

    const [isSuccess, setSuccess] = useState(false)
    const [errors, setErrors] =  useState([])
  
    const handleSubmit = values => {
      console.log(values);
      fetch('http://localhost:4000/events', {
        method: 'POST',
            headers: {
             Accept: 'application/json',
             'Content-Type': 'application/json',
           },
           body: JSON.stringify({
             firstName: values.firstName,
             lastName: values.lastName,
             email: values.email,
             eventDate: values.eventDate
           }),
      }).then(res => res.json())
      .then(res => {
        console.log(res)
        setSuccess(true)
      })
      .catch(err => {
        setErrors(err)
        console.log(err)
        })
    };
  
       //const { handleSubmit } = props;
      return <div>

      <form onSubmit={props.handleSubmit(handleSubmit.bind(this))} className="form">
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

    
      </form>
        {isSuccess === true &&
          <div className="notification is-success">
            <button className="delete" onClick={() => {setSuccess(false)}}></button>
            Submitted event
          </div>
        }

        {errors.length > 0 &&
          <div className="notification is-danger">
          <button className="delete" onClick={() => {setErrors([])}} ></button>
            An error occured. Please try again.
        </div>
        }
      </div>;
    };

export default EventForm