import React from "react";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <ul className="footer-list">
            <li className="footer-item footer-item-title">Про доставку</li>
            <li className="footer-item">Способи оплати</li>
            <li className="footer-item">Про продукцію</li>
          </ul>

          <ul className="footer-list">
            <li className="footer-item footer-item-title">Статті</li>
            <li className="footer-item">Новини</li>
          </ul>

          <ul className="footer-list">
            <li className="footer-item footer-item-title">Beauty Club</li>
            <li className="footer-item">Умови використання</li>
            <li className="footer-item">Повернення та обмін</li>
          </ul>

          <ul className="footer-list">
            <li className="footer-item footer-item-title">Про нас</li>
            <li className="footer-item">Контакти</li>
            <li className="footer-item">Додаток</li>
            <li className="footer-item">Партнерська програма</li>
          </ul>
        </div>

        <div>
          <div className="footer-numbers"> <span className="footer-number">(044) 374 03 83</span> <span className="footer-number">0(800) 50 77 40</span></div>
          <p className="footer-text">
            Ви можете <span className="text-purple">написати нам лист</span> зателефонувати за номерами
            <br />
            Щоденно з 7:55 до 20:05
          </p>

          <a href="#" className="footer-link text-purple">Зворотний дзвінок</a>
          <a href="#" className="footer-link text-purple">Співпраця з нами</a>
        </div>
      </div>
      <hr/>
      <div className="footer-copyright">
        <h4 className="text-purple footer-copyright-link">MAKEUP™. BEAUTY WITHOUT LIMITS</h4>
        <h4 className="footer-copyright-text">© MAKEUP 2009-2023</h4>
      </div>
    </footer>
  );
};

export default Footer;
