import React from 'react';
import { Link } from 'react-router-dom';
import MedicineSearch from './MedicineSeach';
import './style.css';

function Navigationbar() {
  return (
    <nav className='navbar navbar-expand-lg bg-dark p-3'>
      <div className='container-fluid'>
        <img
          className='navbar-brand'
          src='https://www.medware.com.br/wp-content/uploads/2022/08/logo-medware.png'
          style={{ maxWidth: "100%", maxHeight: "75px" }}
          alt="Logo Medware"
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto fw-bold mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#######">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#######">
                Registre-se
              </a>
            </li>
          </ul>
          <MedicineSearch />
        </div>
      </div>
    </nav>
  );
}

export default Navigationbar;
