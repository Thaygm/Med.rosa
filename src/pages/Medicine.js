import React from "react";
import MedicineDetails from "../components/MedicineDetail";

function Medicine() {
  return (
    <div className="container mt-5 text-center">
      <h1 className="text-center pb-3">Busca de Medicamento</h1>
      <MedicineDetails />
    </div>
  );
}

export default Medicine;
