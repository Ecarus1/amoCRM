import React, {useCallback} from "react";
import { Link } from "react-router-dom";

import List from "../elements/list";
import Item from "../elements/item";
import { company, menuLeft, menuRight} from "../../data-links";
import {ReactComponent as Telegram} from "../../assets/telegram.svg";
import {ReactComponent as Viber} from "../../assets/viber.svg";
import {ReactComponent as Whatsapp} from "../../assets/whatsapp.svg";

import "./style.css";
import "./media.css";

function Footer() {
  const linkPolicy = "#";

  const renders = {
    item: useCallback((item) => (
      <Item item={item} key={item.id} styles={"item__margin"}/>
    ), [])
  };

  return (
    <div className="footer">
      <div className="footer__box">
        <div className="footer__item">
          <span className="footer__title">О компании</span>

          <List items={company} renderItem={renders.item} styles={"list-column"}/>
        </div>

        <div className="footer__item footer__item-menu">
          <span className="footer__title">Меню</span>

          <div className="footer__menu">
            <List items={menuLeft} renderItem={renders.item} styles={"list-column"}/>
            <List items={menuRight} renderItem={renders.item} styles={"list-column"}/>
          </div>
        </div>

        <div className="footer__item footer__item-cont">
          <span className="footer__title">Контакты</span>

          <div className="footer-cont">
            <a href="tel:+75555555555" className="footer-cont__tel header__tel">+7 555 555-55-55</a>

            <div className="footer-cont__box">
              <Link to={"#"}><Telegram/></Link>
              <Link to={"#"}><Viber/></Link>
              <Link to={"#"}><Whatsapp/></Link>
            </div>

            <span className="footer-cont__street">Москва, Путевой проезд 3с1, к 902</span>
          </div>
        </div>
      </div>

      <div className="footer__copirate">
        <p className="footer__license">©WELBEX 2022. Все права защищены.</p>
        <Link to={linkPolicy} className="footer__policy">Политика конфиденциальности</Link>
      </div>
    </div>
  );
}

export default React.memo(Footer);