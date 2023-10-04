import React from 'react';
import Logo from '../assets/filetype-pdf.svg';

function Medicine() {
  return (
    <div className='container mt-5 text-center'>
      <h1 className='text-center pb-3'>Busca de Medicamento</h1>
      <div className='row'>
        <div className='col-12 col-md-8 offset-md-2'>
          <h2 className='text-center'>Informações do Medicamento</h2>
          <table className='table table-striped table-primary mt-4'>
            <tbody>
              <tr>
                <th>Nome do Produto</th>
                <td>Medicamento XYZ</td>
              </tr>
              <tr>
                <th>Classe Terapêutica</th>
                <td>Classe XYZ</td>
              </tr>
              <tr>
                <th>Princípio Ativo</th>
                <td>Ativo XYZ</td>
              </tr>
              <tr>
                <th>Medicamento de Referência</th>
                <td>Referência XYZ</td>
              </tr>
              <tr>
                <th>Categoria Regulatória</th>
                <td>Categoria XYZ</td>
              </tr>
              <tr>
                <th>Nome do Fabricante</th>
                <td>Fabricante XYZ</td>
              </tr>
            </tbody>
          </table>
        </div>
          <h2 className='pb-2'>Download da Bula</h2>
          <a href='/bula-do-medicamento.pdf' download>
          <img src= {Logo}  style={{ maxWidth: '100%', maxHeight: '200px', width: '50px' }} alt='Logo PDF' />
          </a>
        </div>
      </div>
  );
}





export default Medicine;
