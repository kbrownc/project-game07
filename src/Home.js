const Home = ({games}) => {
  return (
    <div className="home">
      <h2>Home page</h2>
      <ul>
            {games.map(game => (
              <div className="game-preview" key={game._id}>
                <h2>{game.gameName}</h2>
                <p>Type: {game.type}</p>
                <p>URL: {game.url}</p>
                <p>Date published: {game.published}</p>
              </div>
            ))}
          </ul>
    </div>
  );
};

export default Home;
