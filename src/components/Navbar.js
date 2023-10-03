import React from "react";

function Navigationbar() {
  return (
    <nav className="navbar navbar-expand-lg text-bg-dark p-4">
      <div className="container-fluid">
        <div className="navbar-brand">SUA LOGO AQUI</div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto fw-bold mr-15 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#######">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#######">Registre-se</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Buscar Medicamento" aria-label="Search" />
            <button className="btn btn-outline-secondary fw-bold" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navigationbar;
