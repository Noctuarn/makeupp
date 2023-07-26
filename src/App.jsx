import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";

import Home from "./pages/Home/Home";
import Basket from "./pages/Basket/Basket";
import Detail from "./pages/Detail/Detail";

import NavBar from "./components/NavBar/NavBar";


function App() {
  return (
    <div className="app">
      <div className="app-container">
          <NavBar/>
          qweqweqweqweqweqwe
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </div>
    </div>
  );
}

export default App;
