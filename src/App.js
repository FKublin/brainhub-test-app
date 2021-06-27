import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import logo from './logo.svg';
import './App.css';
import EventForm from './components/EventForm'


const App = () => {

  const handleSignIn = values => {
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
           eventDate: new Date('2023-03-02')
         }),
    }).then(res => res.json())
    .then(res => console.log(res))
  };

  return (
    <div className="App">
      <div className="container">
        <p className="App-intro">
          Contact Form
        </p>
        <EventForm onSubmit={handleSignIn} />
      </div>
    </div>
  );


}

export default App;