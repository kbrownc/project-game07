const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Kim's App Inventory</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/Create">Add</a>
        <a href="/Remove">Delete</a>
        <a href="/Update">Update</a>
      </div>
    </nav>
  );
};

export default Navbar;
