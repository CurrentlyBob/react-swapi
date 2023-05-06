import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Starships from "./components/StarshipsList/Starships";
import StarshipPage from "./pages/StarshipPage/StarshipPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Starships />} />
          <Route path="/starships/:id" element={<StarshipPage />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
