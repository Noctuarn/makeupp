import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { AiOutlineArrowUp } from "react-icons/ai";

import "./App.scss";

import Home from "./pages/Home/Home";
import Basket from "./pages/Basket/Basket";
import Detail from "./pages/Detail/Detail";

import NavBar from "./components/NavBar/NavBar";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";

function App() {
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 500){
          setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    };

    window.addEventListener("scroll", handleScroll)
  }, []);

  const scroolToTope = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app">
      <div className="app-container">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>

        <Form />
        <Footer />

        <button
          onClick={scroolToTope}
          className={`btn btn-anchor ${isVisible ? "btn-anchor-visible" : ""}`}
        >
          <AiOutlineArrowUp />
        </button>
      </div>
    </div>
  );
}

export default App;
