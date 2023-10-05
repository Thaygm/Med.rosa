import React from "react";
import Navigationbar from "./components/Navbar";
import PublicRoute from "./routes/PublicRoutes";
import MedicineSearch from "./components/MedicineSeach";

function App() {
  return (
    <>
      <Navigationbar />
      <PublicRoute />
    </>
  );
}

export default App;
