import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import Remove from './Remove';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [games, setGames] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/games')
      .then(res => {
        if (!res.ok) {
          throw Error('could not fetch data for api/games');
        }
        return res.json();
      })
      .then(games => {
        setGames(games);
        setError(null);
      })
      .catch(err => {
        setError(err.message);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {error && <div>{error}</div>}
          <Routes>
            <Route exact path="/" element={<Home games={games} />} />
            <Route exact path="/Create" element={<Create />} />
            <Route exact path="/Remove" element={<Remove  games={games}/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
