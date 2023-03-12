import React from "react";

import "./style.css";
import "./media.css";

function BoxCompany() {
  return (
    <div className="box-company">
      <h1 className="box-company__title">Зарабатывайте больше</h1>
      <p className="box-company__name">с WELBEX</p>
      <p className="box-company__text">Развиваем и контролируем продажи за вас</p>
    </div>
  );
}

export default React.memo(BoxCompany);