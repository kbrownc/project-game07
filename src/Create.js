import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [gameName, setGameName] = useState('');
  const [type, setType] = useState('');
  const [url, setUrl] = useState('');
  const [error, setError] = useState(null);

  const published = new Date().toDateString();
  const navigate = useNavigate();

  const addGame = e => {
    e.preventDefault();
    const game = { gameName, type, url, published };
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(game),
    };
    fetch('/api', options)
      .then(res => res.json())
      .then(msg => {
        if (msg.status !== 'success') {
          setError('ERROR - game not added');
        }
        navigate('/');
      });
  };

  return (
    <div className="create">
      <h2>Add Game</h2>
        {error && <div>{error}</div>}
       <form onSubmit={addGame}>
        <label>Game Name</label>
        <input type="text" required value={gameName} onChange={e => setGameName(e.target.value)} />
        <label>Game Type</label>
        <input type="text" required value={type} onChange={e => setType(e.target.value)} />
        <label>Game URL</label>
        <input type="text" required value={url} onChange={e => setUrl(e.target.value)} />
        <p></p>
        <button>Add Game</button>
        <p>{gameName}</p>
        <p>{type}</p>
        <p>{url}</p>
      </form>
    </div>
  );
};

export default Create;
