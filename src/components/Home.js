import React from 'react';

function Home() {
  return (
    <div id="OutubroRosaCarrossel" className="carousel carousel-dark slide pt-5" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#OutubroRosaCarrossel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#OutubroRosaCarrossel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#OutubroRosaCarrossel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src="https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-687112264.jpg" className="d-block w-50 mx-auto" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Campanha do Outubro Rosa 2023</h5>
            <p>começa nesta terça!</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src="https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-486750202.jpg" className="d-block w-50 mx-auto" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Mês de conscientização sobre o câncer de mama</h5>
            <p>Saiba Mais</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg" className="d-block w-50 mx-auto" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Consultas da Campanha Outubro Rosa</h5>
            <p>já foram 100% das agendadas.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#OutubroRosaCarrossel" data-bs-slide="prev">
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#OutubroRosaCarrossel" data-bs-slide="next">
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Home;
