import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

function Item({item, styles = ""}) {
  return (
    <li className={`item ${styles}`}>
      <Link to={item.link} className="item__link">{item.name}</Link>
    </li>
  );
}

export default React.memo(Item);