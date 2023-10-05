import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Logo from "../assets/filetype-pdf.svg";

const MedicineDetails = () => {
  const [medicationDetails, setMedicationDetails] = useState(null);
  const [bulaPDF, setBulaPDF] = useState(null);

  const location = useLocation();

  useEffect(() => {
    let path = location.pathname;
    let numprocesso = path.split("/")[2];

    axios
      .get(`https://bula.vercel.app/medicamento/${numprocesso}`)
      .then((response) => {
        let detalhes = response.data;
        setMedicationDetails({
          nome: detalhes.nomeComercial,
          classesTerapeuticas: detalhes.classesTerapeuticas,
          principioAtivo: detalhes.principioAtivo,
          medicamentoReferencia: detalhes.medicamentoReferencia,
          categoriaRegulatoria: detalhes.categoriaRegulatoria,
          razaoSocial: detalhes.empresa.razaoSocial
        });
        setBulaPDF (`https://bula.vercel.app/pdf?id=${detalhes.codigoBulaPaciente}`)
      })

      .catch((error) => {
        console.error(error);
      });
  }, [location.pathname]);

  return (
    <div className="row">
      {medicationDetails && (
        <div>
          <div className="col-12 col-md-8 offset-md-2">
            <h2 className="text-center">Informações do Medicamento</h2>
            <table className="table table-striped table-primary mt-4">
              <tbody>
                <tr>
                  <th>Nome do Produto</th>
                  <td>{medicationDetails.nome}</td>
                </tr>
                <tr>
                  <th>Classe Terapêutica</th>
                  <td>{medicationDetails.classesTerapeuticas}</td>
                </tr>
                <tr>
                  <th>Princípio Ativo</th>
                  <td>{medicationDetails.principioAtivo}</td>
                </tr>
                <tr>
                  <th>Medicamento de Referência</th>
                  <td>{medicationDetails.medicamentoReferencia}</td>
                </tr>
                <tr>
                  <th>Categoria Regulatória</th>
                  <td>{medicationDetails.categoriaRegulatoria}</td>
                </tr>
                <tr>
                  <th>Nome do Fabricante</th>
                  <td>{medicationDetails.razaoSocial}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 className="pb-2">Download da Bula</h2>
          <a href={bulaPDF} download target='_blank'>
            <img
              src={Logo}
              style={{ maxWidth: "100%", maxHeight: "200px", width: "50px" }}
              alt="Logo PDF"
            />
          </a>
        </div>
      )}
    </div>
  );
};

export default MedicineDetails;
