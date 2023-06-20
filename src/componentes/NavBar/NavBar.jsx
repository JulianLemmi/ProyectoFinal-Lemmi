import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  const imgLogo = "https://i.ibb.co/0c3d3n6/Powergy-logo.png";
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={imgLogo} alt="PowerGY Logo" className="logo-img" />
          PowerGY
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <NavLink exact={true.toString()} to="/" className="nav-link" activeclassname="active">
              Productos
            </NavLink>

            <NavLink exact={true.toString()} to={`/categoria/2`} className="nav-link" activeclassname="active">
              Proteinas
            </NavLink>

            <NavLink exact={true.toString()} to={`/categoria/4`} className="nav-link" activeclassname="active">
              Creatinas
            </NavLink>

            <NavLink exact={true.toString()} to={`/categoria/3`} className="nav-link" activeclassname="active">
              Pre Entreno
            </NavLink>
          </div>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
