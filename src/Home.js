const Home = ({games}) => {
  return (
    <div className="home">
      <h2>Home page</h2>
      <ul>
            {games.map(game => (
              <div className="game-preview" key={game._id}>
                <a href={game.url}>{game.gameName}</a><span> ({game.type})</span>
                <p>Card game for ages 10+</p>
                <p>Created: {game.published}</p>
                <p>{game.note}</p>
              </div>
            ))}
          </ul>
    </div>
  );
};

export default Home;
