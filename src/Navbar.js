const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Kim's App Inventory</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/Create">Add App</a>
        <a href="/Remove">Delete App</a>
      </div>
    </nav>
  );
};

export default Navbar;
