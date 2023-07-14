import './App.css';

import React from 'react';

function PersonCard({ firstName, lastName, age, hairColor }) {
  return (
    <div>
      <h2>{firstName} {lastName}</h2>
      <p>Age: {age}</p>
      <p>Hair Color: {hairColor}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <PersonCard firstName="Doe,"  lastName="Jane" age={45} hairColor="Black" />
      <PersonCard firstName="Smith," lastName="John" age={88} hairColor="Brown" />
      <PersonCard firstName="Fillmore," lastName="Milliard" age={50} hairColor="Brown" />
      <PersonCard firstName="Smith," lastName="Maria" age={62} hairColor="Brown" />
    </div>
  );
}

export default App;

