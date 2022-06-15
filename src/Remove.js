import { useNavigate } from 'react-router-dom';

const Remove = ({games, setError}) => {
  const navigate = useNavigate();

  const removeGame = e => {
    e.preventDefault();
    //const removeGameId = { games._id };
    const removeGameId = 1;
    console.log('Remove',games);
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(removeGameId),
    };
    fetch('/api', options)
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
      <h2>Delete Game</h2>
      {error && <div>{error}</div>}
      <ul>
            {games.map(game => (
              <div className="game-preview" key={game._id}>
                <h2>{game.gameName}</h2>
                <p>Type: {game.type}</p>
                <p>URL: {game.url}</p>
                <p>Date published: {game.published}</p>
                <button onClick={removeGame}>Delete</button>
              </div>
            ))}
          </ul>
    </div>
  );
};

export default Remove;
