import React from 'react';
import './App.css';
import EventForm from './components/EventForm'


const App = () => {

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
    })
    .catch(err => console.log(err))
  };

  return (
    <div className="App">
      <div className="container">
        <p className="App-intro">
          Contact Form
        </p>
        <EventForm onSubmit={handleSubmit} />
      </div>
    </div>
  );


}

export default App;