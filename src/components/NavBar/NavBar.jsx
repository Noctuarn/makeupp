import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import { BsSearch } from "react-icons/bs";
import { SlBasket } from "react-icons/sl";
import { BsBagHeart } from "react-icons/bs";

import useAppContext from "../../hooks/useAppContext";

import logo from "../../assets/image/logo.png";

import "./NavBar.scss";

const NavBar = () => {


  const {basketState} = useAppContext(); 

  return (
    <div className="navbar" id="navbar">
      <div className="navbar-header">
        <Button className="btn btn-search btn-icon">
          <BsSearch />
        </Button>
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>

        <div className="navbar-action">
          <Button className="btn btn-like btn-icon"><BsBagHeart/></Button>
          <Link to={"/basket"} className="btn btn-basket btn-icon">
            <SlBasket /> <div className="count">{basketState.length}</div>
          </Link>
        </div>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <a href="#perfume" className="nav-item">Парфумерія</a>
          <a href="#makeup" className="nav-item">Макіяж</a>
          <a href="#men" className="nav-item">Чоловічі</a>
          <a href="#hair" className="nav-item">Волося</a>
          <a href="#face" className="nav-item">Обличчя</a>
          <a href="#bath_and_body" className="nav-item">Тіло та ванна</a>
          <a href="#health_and_care" className="nav-item">Здоров'я та догляд</a>
          <a href="#new" className="nav-item">Новинки</a>
          <a href="#brand" className="nav-item">Бренди</a>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
