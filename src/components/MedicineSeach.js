import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MedicineSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query.length >= 3) {
      axios
        .get(`https://bula.vercel.app/pesquisar?nome=${query}`)
        .then((response) => {
          let listaMed = [];
          response.data.content.map((medicamento) => {
            const med = {
              nomeProduto: medicamento.nomeProduto,
              razaoSocial: medicamento.razaoSocial,
              numProcesso: medicamento.numProcesso,
            };
            listaMed.push(med);
          });
          setResults(listaMed);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setResults([]);
    }
  }, [query]);

  const handleItemClick = () => {
    setResults([]); // Limpar a lista de resultados ao clicar
  };

  return (
    <div className='position-relative custom-container'>
      <input
        className='form-control me-5'
        type='text'
        placeholder='Digite sua busca...'
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul className='list-group custom-list'>
        {results.map((medicamento, index) => (
          <Link
            to={`/medicine/${medicamento.numProcesso}`}
            key={index}
            onClick={handleItemClick}
          >
            <li className='list-group-item custom-list-item'>
              <div className='ms-2'>
                <div className='fw-bold'>{medicamento.nomeProduto}</div>
                <p className='text-limit'>{medicamento.razaoSocial}</p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MedicineSearch;
