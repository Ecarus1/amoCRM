import React from "react";

import "./style.css";

function List({items, renderItem, styles = ""}) {
  return (
    <ul className={`list ${styles}`}>
      {items.map((item) => renderItem(item))}
    </ul>
  );
}

export default React.memo(List);