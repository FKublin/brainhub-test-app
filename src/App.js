import React from 'react';
import './App.css';
import EventForm from './components/EventContainer'


const App = () => {



  return (
    <div className="App">
      <div className="container">
        <p className="App-intro">
          Contact Form
        </p>
        <EventForm />
      </div>
    </div>
  );


}

export default App;