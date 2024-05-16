// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/joke')
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Behroze</h1>
      <h3>Joke count: {jokes.length}</h3>
      {jokes.map((jokes) => (
        <div key={jokes.id}>
          <h4>{jokes.title}</h4>
          <p>{jokes.description}</p>
        </div>
      ))}
    </>
  );
}

export default App;
