import { useNavigate } from 'react-router-dom';

const Remove = ({ games, setError, error }) => {
  const navigate = useNavigate();

  const removeGame = id => {
    const options = {
      method: 'DELETE'
    };
    fetch('/api/games/' + id, options)
      .then(res => res.json())
      .then(msg => {
        if (msg.status !== 'success') {
          setError('ERROR - game not removed');
        }
        navigate('/');
      });
  };

  return (
    <div className="home">
      <h2>Delete App</h2>
      {error && <div>{error}</div>}
      <ul>
        {games.map(game => (
          <div className="game-preview" key={game._id}>
            <h2>{game.gameName}</h2>
            <p>Type: {game.type}</p>
            <p>URL: {game.url}</p>
            <p>Date published: {game.published}</p>
            <p>App Note: {game.note}</p>
            <button onClick={() => removeGame(game._id)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Remove;
