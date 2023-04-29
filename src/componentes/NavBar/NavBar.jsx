import React from 'react';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    const imglogo = "../src/assets/Powergy_logo.png"
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <img src={imglogo} alt="" />
          <span className="navbar-brand" role="button">
            PowerGY
          </span>
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
                <div className="navbar-nav">
                <span className="nav-link" role="button">
                    Productos
                </span>
                <span className="nav-link" role="button">
                    Recetas
                </span>
                <span className="nav-link" role="button">
                    Promos
                </span>
                </div>
            </div>
            <CartWidget />
        </div>
      </nav>
    );
  };

export default Navbar;
