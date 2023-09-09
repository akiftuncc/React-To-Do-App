export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar container">
        <NavLeft />
        <NavRight />
      </div>
    </div>
  );
}

function NavLeft() {
  return (
    <h1 className="navbar-heading">
      <a href="#">Ako's To Do App</a>
    </h1>
  );
}

function NavRight() {
  return (
    <ul className="navbar-links">
      <li className="navbar-link">
        <a href="#">Inbox</a>
      </li>
      <li className="navbar-link">
        <a href="#">Today</a>
      </li>
      <li className="navbar-link">
        <a href="#">Upcoming</a>
      </li>
    </ul>
  );
}
