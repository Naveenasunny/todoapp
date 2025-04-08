// client/src/components/Navbar.js
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const logout = () => navigate('/');

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-nav">
        <Link className="nav-item nav-link" to="/todos"></Link>
        <h1>Todo List</h1>
        <button className="nav-item nav-link btn btn-link" onClick={logout}>Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;
