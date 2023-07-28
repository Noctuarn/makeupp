import React from "react";

import {BsFacebook} from "react-icons/bs"
import {BsYoutube} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"

import "./Form.scss"

const Form = () => {
  return (
    <div className="form">
      <h1 className="form-title">Дізнавайтесь першими про розпродажі і новинки!</h1>

      <form id="form" onSubmit={event => event.preventDefault()}>
          <input className="form-input" type="email" placeholder="Електронна пошта"/>
          <button className="form-btn btn">Підписатися</button>
      </form>
      <div className="form-icons">
        <button className="form-icon btn"><BsFacebook/></button>
        <button className="form-icon btn"><BsYoutube/></button>
        <button className="form-icon btn"><BsTwitter/></button>
        <button className="form-icon btn"><BsInstagram/></button>
      </div>
    </div>
  );
};

export default Form;
