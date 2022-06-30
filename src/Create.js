import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [gameName, setGameName] = useState('');
  const [type, setType] = useState('');
  const [url, setUrl] = useState('');
  const [note, setNote] = useState('');
  const [error, setError] = useState(null);

  const published = new Date().toLocaleDateString();
  const navigate = useNavigate();

  const addGame = e => {
    e.preventDefault();
    const game = { gameName, type, url, published, note };
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
      <h2>Add app</h2>
        {error && <div>{error}</div>}
       <form onSubmit={addGame}>
        <label>App Name</label>
        <input type="text" required value={gameName} onChange={e => setGameName(e.target.value)} />
        <label>App Type</label>
        <input type="text" required value={type} onChange={e => setType(e.target.value)} />
        <label>App URL</label>
        <input type="text" required value={url} onChange={e => setUrl(e.target.value)} />
        <label>App Note</label>
        <input type="text" required value={note} onChange={e => setNote(e.target.value)} />
        <p></p>
        <button>Add App</button>
      </form>
    </div>
  );
};

export default Create;
