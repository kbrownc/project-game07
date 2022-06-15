const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Kim - Game Inventory</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/Create">Add Game</a>
        <a href="/Remove">Delete Game</a>
      </div>
    </nav>
  );
};

export default Navbar;
