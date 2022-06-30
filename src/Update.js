import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Update = ({ games, setError, error }) => {
  const [url, setUrl] = useState('');

  const navigate = useNavigate();

  const updateApp = (id, url) => {
    const game = { id, url };
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(game),
    };
    fetch('/api/update/' + id + '/' + url, options)
      .then(res => res.json())
      .then(msg => {
        if (msg.status !== 'success') {
          setError('ERROR - app not updated');
        }
        navigate('/');
      });
  };

  return (
    <div className="update">
      <h2>Update app URL</h2>
      {error && <div>{error}</div>}
      <form>
        <label>New URL</label>
        <input type="text" required value={url} onChange={e => setUrl(e.target.value)} />
      </form>
      <ul>
        {games.map(game => (
          <div className="game-preview" key={game._id}>
            <p>{game.gameName}</p>
            <button onClick={() => updateApp(game._id, url)}>Update</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Update;
