import React from "react";

import "./style.css";

function Button({type="button", title="Кнопка", callback = () => {}}) {

  const onClick = () => {
    callback();
  }

  return (
    <button className="button" type={type} onClick={onClick}>{title}</button>
  );
}

export default React.memo(Button);