import React, {useCallback} from "react";
import List from "../elements/list";
import Item from "../elements/item";
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/logo_welbex.svg";
import {ReactComponent as Telegram} from "../../assets/telegram.svg";
import {ReactComponent as Viber} from "../../assets/viber.svg";
import {ReactComponent as Whatsapp} from "../../assets/whatsapp.svg";

import "./style.css";
import "./media.css";

function Header() {
  const items = [
    {
      id: 0,
      name: "Услуги",
      link: "#"
    },
    {
      id: 1,
      name: "Виджеты",
      link: "#"
    },
    {
      id: 2,
      name: "Интеграции",
      link: "#"
    },
    {
      id: 3,
      name: "Кейсы",
      link: "#"
    },
    {
      id: 4,
      name: "Сертификаты",
      link: "#"
    },
  ];

  const renders = {
    item: useCallback((item) => (
      <Item item={item} key={item.id}/>
    ), [])
  };
  
  return (
    <div className="header">
      <div className="header__logo">
        <Logo/>
        <p className="header__text">крупный интегратор CRM в Росcии и ещё 8 странах</p>
      </div>

      <div className="header__links">
        <List items={items} renderItem={renders.item}/>
      </div>

      <div className="header__contacts">
        <a href="tel:+75555555555" className="header__tel">+7 555 555-55-55</a>

        <div className="header__сhannels">
          <Link to={"#"}><Telegram/></Link>
          <Link to={"#"}><Viber/></Link>
          <Link to={"#"}><Whatsapp/></Link>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Header);