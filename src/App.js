import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [games, setGames] = useState([]);
  const [gameName, setGameName] = useState('');
  const [type, setType] = useState('');
  const [url, setUrl] = useState('');
  const [error, setError] = useState(null);
  const published = new Date().toDateString();

  const addGame = (e) => {
    e.preventDefault();
    const game = {gameName, type, url, published};
    console.log('client POST', game);
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(game)
    };
    fetch('/api', options)
    .then(res => res.json())
    .then(msg => {if (msg.status !== 'success') {
      setError('game not added to db')
    }});
  };

  useEffect(() => {
    fetch('/api/games')
      .then(res => {
        if (!res.ok) {
          throw Error('could not fetch data for api/games');
        }
        return res.json();
      })
      .then(games => {
        console.log('client GET',games);
        setGames(games);
        setError(null);
      })
      .catch(err => {
        setError(err.message)        
      }) 
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Kim Game Inventory</h2>
        {error && <div>{error}</div>}
        <form onSubmit={addGame}>
          <label>Game Name:</label>
          <input 
            type="text"
            required
            value={gameName}
            onChange={(e) => setGameName(e.target.value)}
          />
          <label>Game Type:</label>
          <input 
            type="text"
            required
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
          <label>Game URL:</label>
          <input 
            type="text"
            required
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <p></p>
          <button>Add Game</button>
        </form>
        <p>{gameName}</p>
        <p>{type}</p>
        <p>{url}</p>
        <ul>
          {games.map(game => (
            <li key={game._id}>
              {game.gameName} {game.type} {game.url} {game.published}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
