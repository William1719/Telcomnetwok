import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Inicio</h1>} />
          <Route path="/servicios" element={<h1>Servicios</h1>} />
          <Route path="/contacto" element={<h1>Contacto</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
