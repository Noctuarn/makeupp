import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import { BsSearch } from "react-icons/bs";
import { SlBasket } from "react-icons/sl";
import { BsBagHeart } from "react-icons/bs";


import logo from "../../assets/image/logo.png";

import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-header">
        <Button className="btn btn-search btn-icon">
          <BsSearch />
        </Button>
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>

        <div className="navbar-action">
          <Button className="btn btn-like btn-icon"><BsBagHeart/></Button>
          <Button className="btn btn-basket btn-icon">
            <SlBasket />
          </Button>
        </div>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">Парфумерія</li>
          <li className="nav-item">Макіяж</li>
          <li className="nav-item">Чоловічі</li>
          <li className="nav-item">Косметика</li>
          <li className="nav-item">Аксесуари</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
